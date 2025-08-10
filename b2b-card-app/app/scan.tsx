import { useCameraPermissions, CameraView } from 'expo-camera';
import { useState } from 'react';
import { Text, Button, View } from 'react-native';

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState<string | null>(null);

  if (!permission || !permission.granted) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>We need camera permission to scan QR codes.</Text>
        <Button title="Grant permission" onPress={() => requestPermission()} />
      </View>
    );
  }

  return (
    <CameraView
      style={{ flex: 1 }}
      barcodeScannerSettings={{
        barcodeTypes: ['qr'], // Only scan QR codes
      }}
      onBarcodeScanned={(result) => {
        if (result?.data) {
          setScannedData(result.data);
          // Navigate or process the scanned data
        }
      }}
    />
  );
}
