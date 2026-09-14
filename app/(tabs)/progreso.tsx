import { StyleSheet, Text, View } from 'react-native';

export default function ProgressScreen() {
  return <View style={s.container}><View style={s.content}>
    <Text style={s.eyebrow}>RESUMEN SEMANAL</Text><Text style={s.title}>Tu progreso</Text><Text style={s.description}>Pequeños pasos, resultados constantes.</Text>
    <View style={s.hero}><View><Text style={s.percent}>80%</Text><Text style={s.heroText}>de tus hábitos completados</Text></View><Text style={s.trophy}>★</Text></View>
    <Text style={s.section}>Esta semana</Text>
    <View style={s.metrics}><View style={s.metric}><Text style={s.number}>4</Text><Text style={s.label}>Hábitos{`\n`}cumplidos</Text></View><View style={s.metric}><Text style={s.number}>5</Text><Text style={s.label}>Mejor{`\n`}racha</Text></View></View>
  </View></View>;
}
const s = StyleSheet.create({
  container:{flex:1,alignItems:'center',backgroundColor:'#081A2B'}, content:{width:'100%',maxWidth:920,padding:24,paddingTop:38}, eyebrow:{color:'#2DE2C5',fontSize:12,fontWeight:'800',letterSpacing:1.4}, title:{marginTop:8,color:'#F5FBFF',fontSize:34,fontWeight:'800'}, description:{marginTop:8,color:'#9CB2C5',fontSize:16}, hero:{marginTop:30,padding:24,minHeight:150,borderRadius:24,backgroundColor:'#146B78',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}, percent:{color:'#FFF',fontSize:48,fontWeight:'800'}, heroText:{maxWidth:160,marginTop:4,color:'#D3FFFA',fontSize:15,lineHeight:21}, trophy:{color:'#FFE18A',fontSize:54}, section:{marginTop:30,marginBottom:14,color:'#F5FBFF',fontSize:19,fontWeight:'800'}, metrics:{flexDirection:'row',gap:14}, metric:{flex:1,minHeight:112,padding:18,borderRadius:20,backgroundColor:'#102B40',borderWidth:1,borderColor:'#1D4059'}, number:{color:'#2DE2C5',fontSize:31,fontWeight:'800'}, label:{marginTop:6,color:'#A9C1D2',fontSize:13,lineHeight:18,fontWeight:'600'}
});
