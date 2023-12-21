import { View, Text, StatusBar, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { COLORS, Sizes } from '../Colors/Colors'


const Slide = ({ item }) => {
    return (
        <View style={{ alignItems: 'center', width: Sizes.width }}>
            <Image source={item.image} style={{ height: '75%', width: Sizes.width * 0.85, resizeMode: 'contain' }} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
    )
}





const slides = [{
    id: '1',
    image: require('../assets/transfer.png'),
    title: 'Tranfer fund faster with QR',
    subtitle: 'You can do any payment'
},
{
    id: '2',
    image: require('../assets/plain_credit.png'),
    title: 'Best Digital Solution',
    subtitle: 'You can do any payment'
},

]

const Onboarding = ({ navigation }) => {
    const [currDot, setCurrDot] = useState(0);
    const ref = useRef(null);
    const Footer = () => {
        return (
            <View style={{
                height: Sizes.height * 0.25,
                justifyContent: 'space-between',
                paddingHorizontal: 20
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 20
                }}>
                    {slides.map((_, index) =>
                        <View key={index} style={[styles.dot, currDot == index && {
                            backgroundColor: COLORS.main,
                            width: 25
                        }]} />
                    )}

                </View>
                <View style={{ marginBottom: 20 }}>
                    {currDot == slides.length - 1 ? <View style={{ height: 50 }}>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.reset({
                            index: 0,
                            routes: [{ name: 'Login' }]
                        })}>
                            <Text style={{ fontWeight: '500', fontSize: 16, color: COLORS.white }}>Get Started !</Text>
                        </TouchableOpacity>
                    </View> : <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={skipSlide} style={[styles.btn, { backgroundColor: 'transparent', borderColor: COLORS.main, borderWidth: 1 }]}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: COLORS.main }}>Skip</Text>
                        </TouchableOpacity>
                        <View style={{ width: 15 }} />
                        <TouchableOpacity style={styles.btn} onPress={goNextSlide}>
                            <Text style={{ fontWeight: '500', fontSize: 16, color: COLORS.white }}>Next</Text>
                        </TouchableOpacity>
                    </View>}


                </View>

            </View>
        )
    }
    const updateDot = e => {
        const contentOffsetx = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetx / Sizes.width);
        setCurrDot(currentIndex);
    }

    const goNextSlide = () => {
        const nextSlide = currDot + 1;
        if (nextSlide != slides.length) {
            const offset = nextSlide * Sizes.width;
            ref?.current?.scrollToOffset({ offset });
            setCurrDot(nextSlide);
        }

    }

    const skipSlide = () => {
        //  const lastIndex = slides.length - 1;
        //  const offset = lastIndex * Sizes.width;
        //  ref?.current?.scrollToOffset({ offset });
        //  setCurrDot(lastIndex);
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }]
        })
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar backgroundColor='#fff' />
            <FlatList
                ref={ref}
                data={slides}
                horizontal
                pagingEnabled
                onMomentumScrollEnd={updateDot}
                contentContainerStyle={{ height: Sizes.height * 0.75 }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: COLORS.main,
        marginTop: 20,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: COLORS.black,
        marginTop: 10

    },
    dot: {
        height: 2.5,
        width: 10,
        backgroundColor: 'grey',
        marginHorizontal: 3,
        borderRadius: 2

    },
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: COLORS.main,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Onboarding