import { useEffect, useRef, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import styles from "./styles";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy,
} from "expo-location";
import { colors } from "@/theme";

export default function LocationMap() {
  // Definir a localização atual do usuário
  const [isLocation, setLocation] = useState<LocationObject | null>(null);
  // A localização do usuário será exibida no mapa.
  const [isFollowUser, setFollowUser] = useState(false);

  const mapRef = useRef<MapView>(null);

  async function requestLocationPermissions() {
    // Obter a permição do user location
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      // Obter a localização do user
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        setLocation(response);
        mapRef.current?.animateCamera({
          center: response.coords,
        });
      }
    );
  }, []);

  const customMapStyle = [
    // Tipo de elemento (por exemplo, estrada, parque)
    // {
    //   elementType: 'geometry.',
    //   stylers: [{ color: theme.colors.base.gray100,  }],
    // },
    {
      elementType: "labels.text",
      stylers: [{ color: colors.base.gray100 }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: colors.base.gray600 }],
    },
    // Esconder ícones de locais feitos pelo homem
    // { elementType: 'landscape.man_made', stylers: [{ visibility: 'off' }] },
    // Esconder ícones de atrações turísticas
    // { elementType: 'poi.attraction', stylers: [{ visibility: 'off' }] },
    // Mostrar texto de negócios
    // { elementType: 'poi.business', stylers: [{ visibility: 'on' }] },
    // Esconder ícones de governo
    // { elementType: 'poi.government', stylers: [{ visibility: 'off' }] }
    // Adicione mais estilos conforme necessário
  ];

  return (
    <SafeAreaView style={styles.container}>
      {isLocation && (
        <MapView
          ref={mapRef}
          style={styles.map}
          customMapStyle={customMapStyle}
          initialRegion={{
            latitude: isLocation.coords.latitude,
            longitude: isLocation.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          //
          showsUserLocation={isFollowUser}
          // Mostrar o botão para mover o mapa para a localização do usuário atual
          showsMyLocationButton
          // provider={PROVIDER_GOOGLE}
        >
          <Marker
            coordinate={{
              latitude: isLocation.coords.latitude,
              longitude: isLocation.coords.longitude,
            }}
          />
        </MapView>
      )}
    </SafeAreaView>
  );
}
