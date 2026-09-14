import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useHabits } from '../src/context/HabitsContext';

export default function NewHabitModal() {
  const router = useRouter();
  const { addHabit } = useHabits();
  const [name, setName] = useState('');
  const saveHabit = () => { const cleanName = name.trim(); if (cleanName) { addHabit(cleanName); router.back(); } };

  return <View style={s.container}><View style={s.content}>
    <View style={s.handle} />
    <Text style={s.eyebrow}>NUEVA INTENCIÓN</Text>
    <Text style={s.title}>Crea un hábito</Text>
    <Text style={s.description}>Una meta pequeña repetida cada día puede cambiar tu rutina.</Text>
    <Text style={s.label}>¿Qué quieres conseguir?</Text>
    <TextInput placeholder="Ej. Caminar 30 minutos" placeholderTextColor="#668095" style={s.input} value={name} onChangeText={setName} autoFocus />
    <Pressable style={({ pressed }) => [s.button, pressed && s.pressed]} onPress={saveHabit}><Text style={s.buttonText}>Guardar hábito  →</Text></Pressable>
    <Pressable onPress={() => router.back()}><Text style={s.cancel}>Cancelar</Text></Pressable>
  </View></View>;
}
const s = StyleSheet.create({
  container:{flex:1,alignItems:'center',backgroundColor:'#081A2B'}, content:{width:'100%',maxWidth:920,padding:24,paddingTop:18}, handle:{width:46,height:5,borderRadius:4,backgroundColor:'#35546A',alignSelf:'center',marginBottom:32}, eyebrow:{color:'#2DE2C5',fontSize:12,fontWeight:'800',letterSpacing:1.4}, title:{marginTop:8,color:'#F5FBFF',fontSize:32,fontWeight:'800'}, description:{marginTop:10,color:'#9CB2C5',fontSize:16,lineHeight:23}, label:{marginTop:30,marginBottom:10,color:'#D8E7F1',fontSize:14,fontWeight:'700'}, input:{borderWidth:1,borderColor:'#28506A',borderRadius:16,padding:16,fontSize:16,color:'#F5FBFF',backgroundColor:'#102B40'}, button:{marginTop:18,padding:17,borderRadius:16,backgroundColor:'#2DE2C5'}, buttonText:{color:'#082033',textAlign:'center',fontWeight:'800',fontSize:16}, cancel:{marginTop:20,color:'#9CB2C5',textAlign:'center',fontWeight:'700'}, pressed:{opacity:.75,transform:[{scale:.98}]}
});
