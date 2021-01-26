import React, { ReactElement } from 'react'
import { ChartKey } from 'use-station/src'
import { View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import ChartItem from './ChartItem'

const List: ChartKey[] = [
  'TxVolume',
  'StakingReturn',
  'TaxRewards',
  'TotalAccounts',
]

const Charts = (): ReactElement => (
  <View style={styles.charts}>
    {List.map((chartKey, index) => (
      <View
        key={chartKey}
        style={EStyleSheet.child(styles, 'row', index, List.length)}
      >
        <ChartItem chartKey={chartKey} />
      </View>
    ))}
  </View>
)

const styles = EStyleSheet.create({
  charts: {
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowOffset: { width: 0, height: 20 },
    shadowRadius: 20,
    shadowOpacity: 0.05,
  },
  row: {
    borderBottomColor: '$dividerColor',
    borderBottomWidth: 1,
  },
  'row:last-child': {
    borderBottomWidth: 0,
  },
})

export default Charts