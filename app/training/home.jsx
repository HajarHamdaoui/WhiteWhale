import { Link, router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
// import * as Calendar from 'expo-calendar';
import { CalendarList, Calendar } from 'react-native-calendars';
import { VictoryArea, VictoryChart, VictoryTheme } from 'victory-native';

export default function App() {
  // Oceanography Color Palette
  const [blue1, blue2, blue3, blue4, blue5] = ['#7ebbfc', '#3366ff', '#1340c8', '#0029a3', '#1c1d7c'];
  // const customData = require('../../dump_data/marked_days.json');
  const [marked, setMarked] = useState([]);
  useEffect(() => {
    setMarked(require('../../dump_data/marked_days.json'));
  }, [marked])
  
  
  const areaChartData = [
    { x: 1, y: 2 },
    { x: 2, y: 0 },
    { x: 3, y: 4 },
    { x: 4, y: 4 },
    { x: 5, y: 6 },
    { x: 6, y: 3 },
    { x: 7, y: 5 },
  ];
  
  
  // [
  //   {day:"mon" , tasks: 2},
  //   {day:"tue" , tasks: 0},
  //   {day:"wed" , tasks: 4},
  //   {day:"thu" , tasks: 4},
  //   {day:"fri" , tasks: 6},
  //   {day:"sat" , tasks: 3},
  //   {day:"sun" , tasks: 5},
  // ]
  
  const handleDayPress = (day) => {
    // setSelectedDate(day.dateString);
    // console.log(day);
    // console.log(day.dateString);
    router.push({ pathname: `training/${day.dateString}` });
    // <Link style={styles.link} href={`training/${day.dateString}`}>training</Link>
  };
  return (
    <View style={styles.container}>
      {/* <CalendarList
      style={{ flex: 1 }}
      onDayPress={(day) => console.log('Selected day:', day)}
      onDayLongPress={(day) => console.log('Long pressed day:', day)}
      onMonthChange={(month) => console.log('Month changed:', month)}
      markedDates={{
        '2023-04-25': {
          selected: true,
          marked: true,
          selectedColor: '#ff0000',
        }, 
      }}
    /> */}
    <Calendar
      markedDates={marked[0]}
      style={{
        borderRadius: 5,
        // margin: 12,
        elevation: 5,
        borderWidth: 4,
        borderColor: 'rgba(100, 100, 100, 0.2)',
        width: '80%'
      }}
      theme={{
        calendarBackground: 'rgba(255, 144, 55, 0.7)',
        dayTextColor: '#fff',
        textDisabledColor: '#444',
        monthTextColor: '#888',
        weekVerticalMargin: 2,
      }}
      onDayPress={handleDayPress}
    />
      <VictoryChart
        theme={VictoryTheme.material}
      >
        <VictoryArea 
          style={{ data: { fill: "#1340c8", fillOpacity: 0.7, stroke: "#1c1d7c", strokeWidth: 3 } }}
          data={areaChartData}
          interpolation="natural"
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
        />
      </VictoryChart>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
