# Proyektlar Shabloni

Bu repozitoridan foydalanib siz o'z proyektlaringizni bitta joyga yig'ib, foydalanuvchiga sodda UI ko'rinishida taqdim etishingiz mumkin.

![web site image](https://i.ibb.co/qYtVvXc/2021-08-01-11-34.png)

Proyekt **react app** ko'rinishida qilingan bo'lib, **typescript** da yozilgan. Va har bir komponenta uchun **test** lar ham mavjud.

Saytingiz chizib beradigan komponenta `App.tsx` komponentasi hisoblanadi.

![app comp image](https://i.ibb.co/vv3Y6MY/2021-08-01-09-57.png)

Shablonda ishlatiladigan barcha rasmlar formati `.png` formatda bo'lishi shart. Profil egasi rasmi `profileImage` papkasi ichida, qilingan proyektlar rasmlari esa `projectImages` papkasi ichida turishi kerak.

![image forders](https://i.ibb.co/bzy5QBX/2021-08-01-10-02.png)

Shablon foydalanuvchi taqdim etayotgan ma'lumotlar asosida yaratiladi. Bu ma'lumotlar `data.tsx` faylida turadi.

_data.tsx_ faylida **data** degan o'zgaruvchi yaratilgan. Bu o'zgaruvchi _array_ ko'rinishida bo'lib, u **ikkita** elementdan tashkil topgan.

![data var](https://i.ibb.co/XZZzCwS/2021-08-01-10-16.png)

Birinchi element ham _array_ ko'rinishida bo'lib, u **to'rtta** **string** elementdan tashkil topgan.

1. profil egasini **ism - familiyasi**
1. profil egasini **linkedin manzili**
1. profil egasini **github manzili**
1. profil egasini **telegram manzili**

![data[0] element](https://i.ibb.co/sJzpXtq/2021-08-01-11-48.png)

Ikkinchi element qilingan proyektlar ma'lumotlari uchun ajratilgan. U ham _array_ ko'rinishida bo'ladi. Va bu array elementlari **obyekt** shaklida bo'lib, har bir obyekt ma'lum proyektlar guruhi uchun bag'ishlangan.

![data[1] element](https://i.ibb.co/dm4LjKc/2.png)

Bu obyekt 2 ta property dan tashkil topgan.

1. proyektlar guruhi nomi - **projectsTitle**
1. shu guruhdagi proyekt ma'lumotlari - **projectsInfo**

![data[1] element](https://i.ibb.co/bbpjZXD/4.png)

_projectsInfo_ ham array ko'rinishida bo'lib, har bir array elementi obyekt ko'rinishida bo'ladi.

Bu obyekt **uchta** `name, deployPath, sourcePath` propertylaridan tashkil topgan. Bu propertylar ham **string** ko'rinishida bo'ladi.

1. name - **proyekt nomi** uchun
1. deployPath - **proyektni ko'rish** uchun link
1. sourcePath - **proyekt kodlarini ko'rish** uchun link

![data[1] element](https://i.ibb.co/zhkT765/5.png)

Siz _data_ o'zgaruvchisini yuqorida aytilgandek to'ldirishingiz, App.tsx komponentasi uchun o'z ishini ustalik bilan qilishiga imkon yaratgan bo'ladi.

**1 - Eslatma**

> `profileImage` papkasi ichidagi rasm nomi aynan `profileImg.png` shaklida bo'lishi kerak.

**2 - Eslatma**

> Qilingan proyekt nomi va bu proyektni `projectImages` papkasidagi unga mos rasm nomi aynan bir xil bo'lishi kerak. Va bu nom `defaultProjectImg` bo'lishi mumkin emas.

![note 2](https://i.ibb.co/XzwhrLW/2021-08-01-11-58.png)
![note 2](https://i.ibb.co/LvCfFpw/2021-08-01-11-59.png)

**3 - Eslatma**

> `projectImages` papkasi ichidagi barcha rasmlar nisbati bir xilda bo'lishi talab etilmaydi. Lekin ularni bir xilda olish tavsiya etiladi.
