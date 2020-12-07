import { connect } from 'react-redux'
import { View } from './view'
import { compose } from 'redux'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = null

const Employee = compose(connect(mapStateToProps, mapDispatchToProps))(View)

export { Employee }
