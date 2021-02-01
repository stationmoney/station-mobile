import React, { ReactElement, useState } from 'react'
import _ from 'lodash'
import { DisplaySelector as Props } from 'use-station/src'
import Card from 'components/Card'
import Number from 'components/Number'
import { Select } from 'components'
import color from 'styles/color'
import layout from 'styles/layout'

const DisplaySelector = (props: Props): ReactElement => {
  const { title, select, displays } = props
  const { defaultValue, options } = select
  const [current, setCurrent] = useState<string>(defaultValue)

  const picker = (
    <Select
      selectedValue={current}
      optionList={_.map(options, (option) => {
        return {
          label: option.children,
          value: option.value,
        }
      })}
      onValueChange={(value): void => {
        setCurrent(`${value}`)
      }}
      containerStyle={{
        height: 20,
        width: 120,
        maxWidth: '100%',
        backgroundColor: '#3656bc',
        borderWidth: 0,
      }}
      textStyle={{ color: 'white', opacity: 0.8, fontSize: 12 }}
    />
  )

  return (
    <Card title={title} action={picker} dark>
      <Number
        {...displays[current]}
        numberFontStyle={{
          fontSize: layout.getScreenWideType() === 'narrow' ? 20 : 24,
          letterSpacing: -0.5,
          lineHeight: 36,
          color: color.white,
          marginTop: 10,
        }}
      />
    </Card>
  )
}

export default DisplaySelector
