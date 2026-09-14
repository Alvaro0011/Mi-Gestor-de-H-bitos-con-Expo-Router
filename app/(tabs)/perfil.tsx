import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return <View style={s.container}><View style={s.content}>
    <Text style={s.eyebrow}>TU ESPACIO</Text><Text style={s.title}>Perfil</Text>
    <View style={s.profile}><View style={s.avatar}><Text style={s.avatarText}>A</Text></View><View><Text style={s.name}>Álvaro</Text><Text style={s.status}>Construyendo constancia</Text></View></View>
    <Text style={s.section}>Mi actividad</Text><View style={s.activity}><Text style={s.star}>✦</Text><View style={s.copy}><Text style={s.activityTitle}>Nivel comprometido</Text><Text style={s.activityText}>Llevas 5 días cuidando tus metas.</Text></View></View>
    <Text style={s.section}>Preferencias</Text><View style={s.option}><Text style={s.optionText}>Notificaciones</Text><Text style={s.optionValue}>Activas</Text></View><View style={s.option}><Text style={s.optionText}>Recordatorio diario</Text><Text style={s.optionValue}>08:00</Text></View>
  </View></View>;
}
const s = StyleSheet.create({
  container:{flex:1,alignItems:'center',backgroundColor:'#081A2B'}, content:{width:'100%',maxWidth:920,padding:24,paddingTop:38}, eyebrow:{color:'#2DE2C5',fontSize:12,fontWeight:'800',letterSpacing:1.4}, title:{marginTop:8,color:'#F5FBFF',fontSize:34,fontWeight:'800'}, profile:{marginTop:28,padding:20,borderRadius:24,backgroundColor:'#102B40',flexDirection:'row',alignItems:'center',gap:16,borderWidth:1,borderColor:'#1D4059'}, avatar:{width:58,height:58,borderRadius:20,backgroundColor:'#2DE2C5',alignItems:'center',justifyContent:'center'}, avatarText:{color:'#082033',fontSize:25,fontWeight:'800'}, name:{color:'#F5FBFF',fontSize:21,fontWeight:'800'}, status:{marginTop:4,color:'#9CB2C5',fontSize:14}, section:{marginTop:28,marginBottom:13,color:'#F5FBFF',fontSize:19,fontWeight:'800'}, activity:{padding:18,borderRadius:20,backgroundColor:'#146B78',flexDirection:'row',gap:14}, star:{color:'#FFE18A',fontSize:25}, copy:{flex:1}, activityTitle:{color:'#FFF',fontSize:16,fontWeight:'800'}, activityText:{marginTop:5,color:'#D3FFFA',fontSize:14,lineHeight:19}, option:{paddingVertical:18,borderBottomWidth:1,borderBottomColor:'#1D4059',flexDirection:'row',justifyContent:'space-between'}, optionText:{color:'#D8E7F1',fontSize:16,fontWeight:'600'}, optionValue:{color:'#2DE2C5',fontSize:15,fontWeight:'700'}
});
