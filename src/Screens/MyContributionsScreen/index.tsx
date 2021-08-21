import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native-elements/dist/image/Image'
import Header from '../../Globals/routes/Header'
import CommonStyle from '../../Globals/Styles/CommonStyle'
 
import MarginStyles from '../../Globals/Styles/MarginStyles'
import TextStyles from './../../Globals/Styles/TextStyle';
import ColorsStyle from './../../Globals/Styles/ColorsStyle';

const MyContributionsScreen = () => {
    return (
        <ImageBackground
        resizeMode="stretch"
        style={{width: '100%', height: '100%'}}
        source={require('./image/Background.jpg')}>
  
        <Header title="My Coupons"  />
  
         

         <View style={[MarginStyles(120).marginTop]}>
             {
            Data.map(item=>{
                return (
                    <View style={[CommonStyle.rowFlexStart ]}>
                            <View>
                                <Image source={item.image} style={{width:55, height:55}} />
                            </View>
                            <View style={[MarginStyles(10).marginLeft, CommonStyle.center]}>
                                <Text style={[TextStyles.NexaBoldText17]}>{item.title}</Text>
                                <Text style={[TextStyles.NexaBoldText13, ColorsStyle.WhiteColor]}  >{item.subTitle}</Text>
                            </View>
                    </View>
                )
            })
             }
         </View>
         
  
        
        </ImageBackground>
    )
}

export default MyContributionsScreen

const Data =[
    {
        id:1,
        title:'My Badges',
        subTitle:'Earn for your achievements',
        image:require('./image/icon_1.png')
    },

    {
        id:2,
        title:'My Reviews',
        subTitle:'Written by you',
        image:require('./image/icon_2.png')
    },

    {
        id:3,
        title:'My QnA',
        subTitle:'Question asked and answered by you',
        image:require('./image/icon_3.png')
    },

    
]
