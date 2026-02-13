export const productsData = [
    // Consumer Electronics
    {
        id: 1,
        name: 'Smart LED TV 55"',
        category: 'consumer-electronics',
        description: '4K Ultra HD Smart LED Television with HDR and built-in streaming apps',
        image: '/assets/images/products/smart-tv.jpg',
        features: [
            '4K Ultra HD Resolution',
            'HDR10+ Support',
            'Smart TV with Android OS',
            'Voice Control Compatible',
            'Multiple HDMI & USB Ports'
        ],
        specifications: {
            screenSize: '55 inches',
            resolution: '3840 x 2160',
            refreshRate: '60Hz',
            connectivity: 'WiFi, Bluetooth, HDMI, USB'
        }
    },
    {
        id: 2,
        name: 'Premium Sound System',
        category: 'consumer-electronics',
        description: 'High-fidelity home theater sound system with wireless subwoofer',
        image: '/assets/images/products/sound-system.jpg',
        features: [
            '5.1 Surround Sound',
            'Wireless Subwoofer',
            'Bluetooth Connectivity',
            'Multiple Input Options',
            'Remote Control'
        ],
        specifications: {
            power: '1000W',
            channels: '5.1',
            connectivity: 'Bluetooth, HDMI ARC, Optical'
        }
    },
    {
        id: 3,
        name: 'Smart Home Hub',
        category: 'consumer-electronics',
        description: 'Central control system for all your smart home devices',
        image: '/assets/images/products/smart-hub.jpg',
        features: [
            'Voice Assistant Integration',
            'Multi-Device Control',
            'Energy Monitoring',
            'Security Integration',
            'Mobile App Control'
        ],
        specifications: {
            compatibility: 'Alexa, Google Home, HomeKit',
            connectivity: 'WiFi, Zigbee, Z-Wave'
        }
    },

    // Home Appliances
    {
        id: 4,
        name: 'French Door Refrigerator',
        category: 'home-appliances',
        description: 'Energy-efficient refrigerator with smart cooling technology',
        image: '/assets/images/products/refrigerator.jpg',
        features: [
            'Inverter Compressor',
            'Multi-Air Flow System',
            'LED Lighting',
            'Water Dispenser',
            'Energy Star Certified'
        ],
        specifications: {
            capacity: '600L',
            energyRating: 'A++',
            dimensions: '180cm x 90cm x 70cm'
        }
    },
    {
        id: 5,
        name: 'Front Load Washing Machine',
        category: 'home-appliances',
        description: 'Automatic washing machine with multiple wash programs',
        image: '/assets/images/products/washing-machine.jpg',
        features: [
            'Inverter Motor',
            '14 Wash Programs',
            'Steam Wash Function',
            'Child Lock',
            'Delay Start Timer'
        ],
        specifications: {
            capacity: '9kg',
            spinSpeed: '1400 RPM',
            energyRating: 'A+++'
        }
    },
    {
        id: 6,
        name: 'Split Air Conditioner',
        category: 'home-appliances',
        description: 'Energy-efficient inverter AC with smart temperature control',
        image: '/assets/images/products/air-conditioner.jpg',
        features: [
            'Inverter Technology',
            'Turbo Cooling',
            'Auto Clean Function',
            'Sleep Mode',
            'Remote Control'
        ],
        specifications: {
            capacity: '1.5 Ton',
            energyRating: '5 Star',
            coverage: 'Up to 150 sq ft'
        }
    },

    // Industrial Equipment
    {
        id: 7,
        name: 'Diesel Generator 50KVA',
        category: 'industrial-equipment',
        description: 'Heavy-duty diesel generator for industrial applications',
        image: '/assets/images/products/generator.jpg',
        features: [
            'Automatic Start',
            'Fuel Efficient Engine',
            'Sound Proof Canopy',
            'Digital Control Panel',
            'Overload Protection'
        ],
        specifications: {
            power: '50 KVA',
            fuelType: 'Diesel',
            voltage: '380V / 220V'
        }
    },
    {
        id: 8,
        name: 'Industrial Air Compressor',
        category: 'industrial-equipment',
        description: 'High-performance air compressor for industrial use',
        image: '/assets/images/products/compressor.jpg',
        features: [
            'Oil-Free Operation',
            'Low Noise Level',
            'Automatic Pressure Control',
            'Heavy Duty Motor',
            'Large Air Tank'
        ],
        specifications: {
            pressure: '8 Bar',
            tankCapacity: '500L',
            power: '15 HP'
        }
    },

    // Power Solutions
    {
        id: 9,
        name: 'Online UPS 10KVA',
        category: 'power-solutions',
        description: 'True online UPS for critical power protection',
        image: '/assets/images/products/ups.jpg',
        features: [
            'True Online Technology',
            'Pure Sine Wave Output',
            'LCD Display',
            'Battery Backup',
            'Surge Protection'
        ],
        specifications: {
            capacity: '10 KVA',
            backupTime: '30-60 minutes',
            inputVoltage: '220V AC'
        }
    },
    {
        id: 10,
        name: 'Solar Inverter 5KW',
        category: 'power-solutions',
        description: 'Hybrid solar inverter with battery charging',
        image: '/assets/images/products/inverter.jpg',
        features: [
            'MPPT Technology',
            'Grid-Tie Capability',
            'Battery Charging',
            'LCD Monitoring',
            'Overload Protection'
        ],
        specifications: {
            power: '5 KW',
            efficiency: '97%',
            batteryVoltage: '48V'
        }
    },

    // Lighting Solutions
    {
        id: 11,
        name: 'LED Panel Light',
        category: 'lighting-solutions',
        description: 'Energy-efficient LED panel for commercial spaces',
        image: '/assets/images/products/led-panel.jpg',
        features: [
            'Energy Efficient',
            'Long Lifespan',
            'Uniform Light Distribution',
            'Easy Installation',
            'Low Heat Emission'
        ],
        specifications: {
            power: '40W',
            lumens: '4000 lm',
            colorTemperature: '6500K'
        }
    },
    {
        id: 12,
        name: 'Smart LED Bulb',
        category: 'lighting-solutions',
        description: 'WiFi-enabled smart bulb with color changing',
        image: '/assets/images/products/smart-bulb.jpg',
        features: [
            'WiFi Connectivity',
            'RGB Color Changing',
            'Voice Control',
            'Scheduling',
            'Energy Saving'
        ],
        specifications: {
            power: '9W',
            lumens: '800 lm',
            compatibility: 'Alexa, Google Home'
        }
    },

    // Security Systems
    {
        id: 13,
        name: 'IP CCTV Camera System',
        category: 'security-systems',
        description: '8-channel IP camera system with NVR',
        image: '/assets/images/products/cctv.jpg',
        features: [
            '4MP Resolution',
            'Night Vision',
            'Motion Detection',
            'Remote Viewing',
            'Weather Resistant'
        ],
        specifications: {
            channels: '8',
            resolution: '4MP',
            storage: '2TB HDD'
        }
    },
    {
        id: 14,
        name: 'Access Control System',
        category: 'security-systems',
        description: 'Biometric access control with card reader',
        image: '/assets/images/products/access-control.jpg',
        features: [
            'Fingerprint Scanner',
            'RFID Card Reader',
            'Time Attendance',
            'Network Connectivity',
            'Backup Battery'
        ],
        specifications: {
            capacity: '3000 users',
            connectivity: 'TCP/IP, USB',
            authentication: 'Fingerprint, Card, PIN'
        }
    },
];
