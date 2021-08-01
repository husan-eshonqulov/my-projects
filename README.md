# Proyektlar Shabloni

Bu repozitoritdan foydalanib siz o'z proyektlaringizni bitta joyga yig'ib, foydalanuvchiga sodda UI ko'rinishida taqdim etishingiz mumkin.

![web site image](https://i.ibb.co/qYtVvXc/2021-08-01-11-34.png)

Proyekt __react app__ ko'rinishida qilingan bo'lib, __typescript__ da yozilgan. Va har bir komponenta uchun __test__ lar ham mavjud.

Sizni saytizni chizib beradigan komponenta `App.tsx` komponentasi hisoblanadi.

![app comp image](https://i.ibb.co/vv3Y6MY/2021-08-01-09-57.png)

Shablonda ishlatiladigan barcha rasmlar formati `.png` formatda bo'lishi shart. Profil egasi rasmi `profileImage` papkasi ichida, qilingan proyektlar rasmlari `projectImages` papkasi ichida turishi kerak.

![image forders](https://i.ibb.co/bzy5QBX/2021-08-01-10-02.png)

Shablon foydalanuvchi taqdim etayotgan ma'lumotlar asosida quriladi. Bu ma'lumotlar `data.tsx` faylida turishi kerak.

![data var](https://i.ibb.co/XZZzCwS/2021-08-01-10-16.png)

_data.tsx_ faylida __data__ degan o'zgaruvchi yaratilgan. Bu o'zgaruvchi _array_ ko'rinishida bo'lib, u __ikkita__ elementdan tashkil topgan.

![data elements](https://i.ibb.co/vXwDqG2/2021-08-01-10-20.png)

Birinchi element ham _array_ ko'rinishida bo'lib, u __to'rtta__ __string__ elementdan tashkil topgan. 

1. profil egasini __ism - familiyasi__
1. profil egasini __linkedin linki__
1. profil egasini __github linki__
1. profil egasini __telegram linki__

![data[0] element](https://i.ibb.co/sJzpXtq/2021-08-01-11-48.png)

Ikkinchi element qilingan proyektlar ma'lumotlari uchun ajratilgan bo'lib, u ham _array_ ko'rinishida bo'ladi. Bu array elementlari __obyekt__ shaklida bo'lib, har bir obyekt ma'lum bitta qilingan proyekt uchun bag'ishlangan bo'ladi.

Bu obyekt __uchta__ `name, deployPath, sourcePath` propertylaridan tashkil toplgan. Bu propertylar ham __string__ ko'rinishida bo'ladi.

1. name - __proyekt nomi__ uchun
1. deployPath - __proyektni ko'rish__ uchun link
1. sourcePath - __proyekt kodlarini ko'rish__ uchun link

![data[1] element](https://i.ibb.co/1rvY0w9/2021-08-01-11-54-1.png)

Siz _data_ o'zgaruvchisini yuqorida aytilgandek to'ldirshingiz, App.tsx komponentasi uchun o'z ishini ustalik bilan qilishiga imkon yaratgan bo'ladi.

__1 - Eslatma__

> `profileImage` papkasi ichidagi rasm nomi aynan `profileImg.png` shaklida bo'lishi kerak.

__2 - Eslatma__

> Qilingan proyekt nomi va bu proyektni `projectImages` papkasidagi unga mos rasm nomi aynan bir xil bo'lishi kerak.

![note 2](https://i.ibb.co/XzwhrLW/2021-08-01-11-58.png)
![note 2](https://i.ibb.co/LvCfFpw/2021-08-01-11-59.png)
