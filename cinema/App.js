import { Text, View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#181b20',
    width: '100%',
    height: '100%',
  },
  iconLeft: {
    position: 'absolute',
    paddingTop: '10%',
    paddingLeft: '4%',
  },
  banner: {
    width: '100%',
    height: '25%',
    position: 'relative',
  },
  titulo: {
    position: 'relative',
    color: 'white',
    bottom: '7%',
    left: '5%',
    fontWeight: 'bolder',
    textShadowColor: 'black',
    textShadowRadius: 2,
    fontSize: 32,
  },
  gradiente: {
    position: 'absolute',
    height: '25%',
    top: 0,
    left: 0,
    right: 0,
  },
  iconEllipsis: {
    position: 'absolute',
    paddingTop: '10%',
    right: '4%',
  },
  subTexto: {
    color: '#9a9a9a',
    margin: '7%',
    bottom: 60,
    fontSize: 20,
  },
  subTexto2: {
    color: '#8E9BA4',
    padding: '7%',
    bottom: '13%',
    position: 'relative',
    fontSize: 24,
  },
  botaoTrailer: {
    backgroundColor: '#435866',
    width: '22%',
    height: '4%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    borderRadius: 30,
    position: 'absolute',
    top:'35%',
    left: '6%'
  },
  textoDuracao: {
    color: '#9a9a9a',
    marginLeft: '33%',
    bottom: 116,
    fontSize: 20,
  },
  poster: {
    maxWidth:'30%',
    maxHeight:'24%',
    width: '100%',
    height: '100%',
    position:'absolute',
    right:'5%',
    top:'20%'
  },
  sinopse: {
    color: '#8E9BA4',
    margin:'6%',
    bottom: 70,
    fontSize: 17,
  }
});

class Filme {
  constructor(titulo, ano, duracao, diretor, sinopse, poster, banner) {
    this.titulo = titulo;
    this.ano = ano;
    this.duracao = duracao;
    this.diretor = diretor;
    this.sinopse = sinopse;
    this.poster = poster;
    this.banner = banner;
  }

  mostrarInfo() {
    return (
      <>
        <Image style={estilos.banner} source={{ uri: this.banner }} />
        <AntDesign
          style={estilos.iconLeft}
          name="left"
          size={24}
          color="white"
        />
        <AntDesign
          style={estilos.iconEllipsis}
          name="ellipsis1"
          size={24}
          color="white"
        />
        <LinearGradient
          colors={['transparent', '#181b20']}
          locations={[0.3, 1]}
          style={estilos.gradiente}
        />
        <Text style={estilos.titulo}>{this.titulo}</Text>
        <Text style={estilos.subTexto}>{this.ano} • Dirigido por</Text>
        <Text style={estilos.subTexto2}>{this.diretor} </Text>
        <View style={estilos.botaoTrailer}>
          <AntDesign name="caretright" size={12} color="#8E9BA4" />
          <Text style={{ color: '#8E9BA4' }}>TRAILER</Text>
        </View>
        <Text style={estilos.textoDuracao}>{this.duracao}</Text>
        <Image style={estilos.poster} source={{uri:this.poster}}/>
        <Text style={estilos.sinopse}> {this.sinopse} </Text>
      </>
    );
  }
}

export default function App() {
  let filmeDisplay = new Filme(
    'O Show de Truman', //titulo
    '1998',             //ano
    '103 mins',         //duração
    'Peter Weir',       //diretor
    'Truman Burbank (Jim Carrey) é um pacato vendedor de seguros que leva um vida simples com sua esposa Meryl Burbank (Laura Linney). Porém algumas coisas ao seu redor fazem com que ele passe a estranhar sua cidade, seus supostos amigos e até sua mulher. Após conhecer a misteriosa Lauren (Natascha McElhone), ele fica intrigado e acaba descobrindo que toda sua vida foi monitorada por câmeras e transmitida em rede nacional.', //sinopse
    'https://upload.wikimedia.org/wikipedia/en/c/cd/Trumanshow.jpg',  //poster
    'https://i.pinimg.com/736x/02/46/6f/02466f801dda0c697f8cca5cb7abed5a.jpg' //banner
  );

  return <View style={estilos.view}>{filmeDisplay.mostrarInfo()}</View>;
}
