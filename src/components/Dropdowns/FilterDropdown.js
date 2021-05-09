import React from 'react'
import PropTypes from 'prop-types'
import {CaretDownFilled } from '@ant-design/icons'
import { Dropdown, Button, Menu } from 'antd'

const FilterDropdown = ({
  onMenuClick,
  filterType,
  menuOptions = [],
  dropdownProps,
}) => {
  const menu = menuOptions.map(item => (
    <Menu.Item key={item.key}>{item.name}</Menu.Item>
  ))
  return (
    <Dropdown
      overlay={<Menu onClick={onMenuClick}>{menu}</Menu>}
      {...dropdownProps}
    >
      <Button  className="filter-button-component">
        {filterType} <CaretDownFilled style={{marginLeft:32}}/>
      </Button>
    </Dropdown>
  )
}

FilterDropdown.propTypes = {
  onMenuClick: PropTypes.func,
  menuOptions: PropTypes.array.isRequired,
  dropdownProps: PropTypes.object,
}

export default FilterDropdown
