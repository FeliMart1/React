const productos = [
    { id: 1, nombre: 'Memoria Kingston 8GB DDR4 3600Mhz', precio: 34, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/05/4770_1_892330f2abe94924ae559d6e12200601.jpg', categoria: 'componentes' },
    { id: 2, nombre: 'Memoria Kingston 16GB DDR4 3600Mhz', precio: 66, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2024/02/FURY_Renegade_Black_DDR4_1_angle-zm-lg28174_fa9aa5c169334ab1aa909a0b21aaa404.jpg', categoria: 'componentes' },
    { id: 3, nombre: 'Intel Core i3 10100f', precio: 98, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/05/3914_1_43d97dcd9f1d4494adf85b5d08b1742f-1.jpg', categoria: 'componentes' },
    { id: 4, nombre: 'Intel Core i9 13900KF', precio: 775, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/05/4987_1_44a98544508542ec8a4d324d0090ed74.jpg', categoria: 'componentes' },
    { id: 5, nombre: 'Intel Core i5 14600KF', precio: 410, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/10/Intel-Core-I5-I5-14600Kf-3.5-Ghz-14-Core-Lga1700-no-graphics-BX8071514600KF18178_c03f811f80ea4f96ab00f68e3dbb7787.webp', categoria: 'componentes' },
    { id: 6, nombre: 'Asus GeForce GTX 1650 Dual 4GB GDDR6', precio: 230, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2024/01/iZEjrI0xPtk9eheV_setting_xxx_0_90_end_80047211_34656e964afe4ed48ce54e212e6593ab.jpg', categoria: 'componentes' },
    { id: 7, nombre: 'Gigabyte GeForce RTX3050 Winforce OC 8Gb', precio: 379, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/05/3050wf33183_75dde2adae23455dbc244383f37f5c8d.jpg', categoria: 'componentes' },
    { id: 8, nombre: 'Gigabyte GeForce RTX4060 TI Aero OC 16Gb', precio: 755, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/11/Png-_8_67197_5514e848b4644d0798bad111f1bc67d8.jpg', categoria: 'componentes' },
    { id: 9, nombre: 'KINGSTON A400 SSD 240Gb', precio: 35, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/05/1867_2_c40cbda8e9204d1e822c0f8fdfa31455.png', categoria: 'componentes' },
    { id: 10, nombre: 'HP S650 SSD 960GB', precio: 72, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2024/05/6256_1_22ed10d7288d436c9b659d6f37d79802.jpg', categoria: 'componentes' },
    { id: 11, nombre: 'Mother MSI A620M E AM5 DDR5', precio: 105, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2024/02/91HwUtyF252BXL34169_1dd20d4e3f6243f69587e2c81e2a9252.jpg', categoria: 'componentes' },
    { id: 12, nombre: 'Mother Gigabyte B650M Aorus Elite AX G11', precio: 265, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/12/10002520252813252994329_857e7268e5f84013a201ade6cf6d8a8f.webp', categoria: 'componentes' },
    { id: 13, nombre: 'Fuente Gigabyte P550B 80 Plus Bronze', precio: 70, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/05/3652_2_4ab84433ac384213ab6c2e2732592335.jpg', categoria: 'componentes' },
    { id: 14, nombre: 'Gabinete Antec AX20 Elite', precio: 61, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2024/07/6443_1_4eedc7486c6643cd90db77195e947ede.jpg', categoria: 'componentes' },
    { id: 15, nombre: 'Gabinete DeepCool CH560', precio: 145, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2024/05/6227_1_12b3e4e75de14ea891a28f314648608e.jpg', categoria: 'componentes' },
    { id: 16, nombre: 'Teclado Redragon Kumara K552 White', precio: 49, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/05/KUMARA2520WH_126594_9c3facca8f0a45f3a1eaf4a1178f10b5.webp', categoria: 'perifericos' },
    { id: 17, nombre: 'Teclado HyperX Alloy Rise', precio: 195, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2024/08/6476_1_e215ef762fd545b59fa0b2b041de9d01.jpg', categoria: 'perifericos' },
    { id: 18, nombre: 'Mouse Razer Deathadder Essential', precio: 25, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2024/05/6259_2_3794ba705a0f475ba4887095d9432048.jpg', categoria: 'perifericos' },
    { id: 19, nombre: 'Mouse Logitech G403 Gaming Hero', precio: 54, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/05/Logitech25252520G403_121739_d3bd5446df184fb3a85163236df95bf3.webp', categoria: 'perifericos' },
    { id: 20, nombre: 'Mouse Razer Basilisk V3', precio: 180, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2024/05/5107_3_0e36fbd941f649a098a2d8db2c7d7906.jpg', categoria: 'perifericos' },
    { id: 21, nombre: 'Mouse Pad Logitech Studio Series', precio: 11, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/05/Studio2520Series2520Grafito_145718_7ca347ec239f47c799dc4ee68be400a7.webp', categoria: 'perifericos' },
    { id: 22, nombre: 'Mouse pad Razer Gigantus v2 XXL', precio: 42, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/06/4458_1_ea5901aabcc843d9a93934f03f8e958c.jpg', categoria: 'perifericos' },
    { id: 23, nombre: 'Auricular Astro A10 Gen1', precio: 47, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2024/01/71OdkKS0CWL._AC_SL1500_6646_08f0394ebb5f496ba82b45ed84453f64.jpg', categoria: 'perifericos' },
    { id: 24, nombre: 'Auricular Logitech G435', precio: 79, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/05/G435_12249_2a34f9079e434a43a38c541da3267841.webp', categoria: 'perifericos' },
    { id: 25, nombre: 'Auricular Logitech G735', precio: 315, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/05/G735_177857_8f6891cc1b324816a103652a6a68af29.webp', categoria: 'perifericos' },
    { id: 26, nombre: 'Webcam Logitech C270', precio: 30, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/05/C27025252520HD25252520WEBCAM_146825_15a30b5010bc417da8b78bc4a745e76a.webp', categoria: 'perifericos' },
    { id: 27, nombre: 'Webcam Logitech C922', precio: 120, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/05/C9222520PRO2520HD2520STREAM2520WEBCAM_18522_cc2494cf14604e7eac62a9b0fdee1e88.webp', categoria: 'perifericos' },
    { id: 28, nombre: 'Micrófono Razer Seiren', precio: 45, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/05/seiren-q.jpg', categoria: 'perifericos' },
    { id: 29, nombre: 'Micrófono HyperX Solocast', precio: 85, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/05/SoloCast_182701_5ba655fc05aa4d518c1989dd711524cb.webp', categoria: 'perifericos' },
    { id: 30, nombre: 'Silla Huzaro HZ-Combat', precio: 195, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2024/01/combat_5_0_black_skos_prawa6568_d2ceb3300a10402fbf947d52b7dda2c6.jpg', categoria: 'perifericos' },
    { id: 31, nombre: 'Silla Cooler Master Caliber', precio: 349, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2024/08/6542_1_74c6ee2dd8b1472b96b82912e64c4011.jpg', categoria: 'perifericos' },
    { id: 32, nombre: 'Monitor ViewSonic VA2233-H 22″', precio: 104, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/05/23mon-con1156-prd-va2233-h_front_197610_0a203f7013d64cbda2ac8b8c4832582f.webp', categoria: 'perifericos' },
    { id: 33, nombre: 'Monitor Gigabyte GS27F 27″ 170hz', precio: 200, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/10/GS27F1249_435330285efc40d2b476d10646bfafdd.webp', categoria: 'perifericos' },
    { id: 34, nombre: 'Soporte para monitor Brateck', precio: 39, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2024/08/6516_1_5eb9790ecf864c0cbd14855d2359b40f.jpg', categoria: 'perifericos' },
    { id: 35, nombre: 'TV Smartlife Smart UHD 50″', precio: 394, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2024/06/6327_1_86a0eb7a6c684ffb8f76b204ad49fe6f.png', categoria: 'perifericos' },
    { id: 36, nombre: 'Cable de poder tipo 8', precio: 3, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/05/173_1ea1c494c12714887b43fb6c3eab86672_d635d37870b344d686341f70ed1700d7.jpeg', categoria: 'perifericos' },
    { id: 37, nombre: 'Adaptador mini HDMI M/HDMI H', precio: 5, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/05/6_2_970f16474962461e9f5fcc7994cd6256.jpg', categoria: 'perifericos' },
    { id: 38, nombre: 'HUB USB 3.0 TP-LINK UE330 + Adaptador de red', precio: 25, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/05/TP-LINK25252520UE330_15566_25501ef987b1449f8046c3717fe38ab5.jpg', categoria: 'perifericos' },
    { id: 39, nombre: 'Team Dash Micro SD 16Gb', precio: 3, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/05/2189_1_92d83b05466d4f24b2a1ed76a28784e7.jpg', categoria: 'perifericos' },
    { id: 40, nombre: 'Pendrive Kingston USB Exodia 128Gb', precio: 12, img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/08/Exodia4267_69896fd51a334007acf5d711426033d5.jpg', categoria: 'perifericos' }




]
export const getProductoById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = productos.find((producto) => producto.id === parseInt(id));
            resolve(producto);
        }, 2000);
    });
};

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
};

export const getProductosByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosFiltrados = productos.filter((producto) => producto.categoria === categoryId);
            resolve(productosFiltrados);
        }, 2000);
    });
};
