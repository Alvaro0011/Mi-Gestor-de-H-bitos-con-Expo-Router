import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { useHabits } from '../../src/context/HabitsContext';

export default function HabitDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { getHabitById } = useHabits();
  const habit = getHabitById(id);
  return <View style={s.container}><View style={s.content}>
    <Text style={s.eyebrow}>HÁBITO EN CURSO</Text><Text style={s.title}>Detalle</Text>
    {habit ? <View style={s.card}>
      <View style={s.iconBox}><Text style={s.icon}>{habit.icon}</Text></View>
      <Text style={s.name}>{habit.name}</Text><Text style={s.goalLabel}>META DIARIA</Text><Text style={s.goal}>{habit.goal}</Text>
      <View style={s.divider} /><Text style={s.id}>Identificador del hábito: {id}</Text>
    </View> : <Text style={s.empty}>No se encontró el hábito con id: {id}</Text>}
  </View></View>;
}
const s = StyleSheet.create({
  container:{flex:1,alignItems:'center',backgroundColor:'#081A2B'}, content:{width:'100%',maxWidth:920,padding:24,paddingTop:38}, eyebrow:{color:'#2DE2C5',fontSize:12,fontWeight:'800',letterSpacing:1.4}, title:{marginTop:8,color:'#F5FBFF',fontSize:34,fontWeight:'800'}, card:{marginTop:28,padding:24,borderRadius:24,backgroundColor:'#102B40',borderWidth:1,borderColor:'#1D4059'}, iconBox:{width:62,height:62,borderRadius:20,alignItems:'center',justifyContent:'center',backgroundColor:'#163A51'}, icon:{fontSize:31}, name:{marginTop:20,color:'#F5FBFF',fontSize:25,fontWeight:'800'}, goalLabel:{marginTop:26,color:'#2DE2C5',fontSize:11,fontWeight:'800',letterSpacing:1.2}, goal:{marginTop:7,color:'#D8E7F1',fontSize:17,fontWeight:'600'}, divider:{height:1,backgroundColor:'#24465E',marginVertical:22}, id:{color:'#7F9AAF',fontSize:13}, empty:{marginTop:30,color:'#D8E7F1',fontSize:16}
});
