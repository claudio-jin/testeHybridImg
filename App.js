import React from 'react'
import { 
  View,
  StatusBar,
  Image,
  Button
 } from 'react-native'

//  import img from ''

export default class App extends React.Component {

  constructor(props)  {
    super(props)
    this.state = {
      resizeMode : 'cover'
    }
  }

  render () {
    return(
      <View style = {{marginTop: 20}}>
        <Image
        resizeMode = {this.state.resizeMode}
          source = {{uri : 'https://picsum.photos/id/10/300/200.jpg'}}
          style = {{width: 300, height: 200, alignSelf : 'center'}}
        />

        <View>
          <Button 
          title = "Cover" 
          onPress={_=> this.setState({resizeMode : "cover"})}
          />
          <Button 
          title = "Contain" 
          onPress={_=> this.setState({resizeMode : "contain"})}
          />
          <Button 
          title = "Stretch" 
          onPress={_=> this.setState({resizeMode : "stretch"})}
          />
          <Button 
          title = "Repeat" 
          onPress={_=> this.setState({resizeMode : "repeat"})}
          />
          <Button 
          title = "Center" 
          onPress={_=> this.setState({resizeMode : "center"})}
          />
        </View>
      <StatusBar/>
      </View>
    )
  }
}
