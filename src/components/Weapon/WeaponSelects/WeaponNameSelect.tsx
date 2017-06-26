import * as preact from 'preact'
import { connect } from 'preact-redux'
import { StoreState } from '@/reducers'
import { setWeaponName } from '@/reducers/weapon'
import AutoComplete from './AutoComplete'
import './WeaponNameSelect.css'

const mapStateToProps = (state: StoreState) =>
  ({
    name: state.weapon.name,
    list: state.weapon.list
  })

const mapDispatchToProps = (dispatch: any) =>
  ({
    setWeaponName: (value: string) => {
      dispatch(setWeaponName(value))
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(
  (props) =>
    <AutoComplete
      value={props.name}
      dataList={props.list}
      width={300}
      update={props.setWeaponName}
    />
)
