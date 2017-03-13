import * as preact from 'preact'
import EventFrom from '../../units/EventFrom'

interface Props extends JSX.HTMLAttributes {
    value: string
    update: (value: string) => any
}

interface State {
    value: string
}

// node.js
declare var document: Document
var document = document || {}

export default class DelayInput extends preact.Component<Props, State> {
    refs = {} as { input: HTMLInputElement }
    timer: NodeJS.Timer

    update = () => {
        this.props.update(this.state.value)
    }
    onInput = (e: EventFrom<HTMLInputElement>) => {
        clearTimeout(this.timer)

        this.timer = setTimeout(this.update, 500)
        this.setState({ value: e.currentTarget.value })
        // this.props.onInput && this.props.onInput(e)
    }
    onChange = () => {
        clearTimeout(this.timer)
        this.update()
        // this.props.onChange && this.props.onChange(e)
    }
    onBlur = () => {
        clearTimeout(this.timer)

        const value = this.props.value

        if (this.state.value === value) return

        this.setState({ value })
        // this.props.onBlur && this.props.onBlur(e)
    }
    render() {
        return <input {...this.props} ref={input => this.refs.input = input as any}
            value={(this.refs.input === document.activeElement) ? this.state.value : this.props.value}
            onInput={this.onInput}
            onChange={this.onChange}
            onBlur={this.onBlur} />
    }
}
