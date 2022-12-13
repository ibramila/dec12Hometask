# Callback vs Promises ⚖️

### Task 1 - Callback 🎯

Ilk once static ikidene deyishen teyin edin: **USERNAME** ve **PASSWORD**, ve onlara istediyiviz deyer vere bilersiniz. Daha sonra 4 dene function yazmalisiniz:

1. ***Login*** function. Bu funciton argument olarag **name**, **password** ve **callback** gebul edir, ve ***4 saniye sonra ishe dushur***. Eger *name* ve ya *password* duzgun geyd edilmemishdise, o zaman function *break* olunmalidi ve consola *"Invalid credentials!"* chixarilmalidir. Eger argumentler duzgun geyd olunumbsa, o zaman callback ishe dushmelidi.
2. ***welcome*** function. Bu function argument olarag **name** ve **callback** gebul edir. Eger user ugurla **Login** oldusa, o zaman **welcome** funtion ishe dushmelidi ve console'a "Welcome back, {userin adi}" chixarilmalidi ve 1 saniye sonra callback ishde dushmelidi. 
3. ***getListOfFriends*** function. Bu function argument olarag **callback** gebul etmelidir, ve 1.5 saniye sonra hemin callback argument olarag bir **array of friends** list gebul ederek ishe dushmelidir. Array'i **getListOfFriends** function'in body'sinde yarada bilersiniz. Example: 
 ```js
const friends = ["Zakir", "Alxan", "Leyla", "Yusif"];
callback(friends);
```
4. ***showFriend*** function. Bu function argment olarag ***getListOfFriends*** function'da yaratdigimiz *list of friends* arrayini gebul etmelidir, ve arrayin 0'ci elementini console chixartmalidir.


 Yuxarda geyd olunan 4 sirali tapshirigi bitirdikden sonra, kodunuzu bu shekilde ishe salmalisiniz: 
 ```js
let USERNAME = "Tural";
let PASSWORD = "12345";

logIn("Tural", "12345", (user) => {
  welcome(user.name, () => {
    getListOfFriends((friends) => {
      showFriend(friends);
    });
  });
});
``` 


**Note**: Kodun ishe dushmek ardiciligi geyd olunan siralama esasinda yeirne yetirilmelidir. 


### Task 2 - From CallBack ➡️ to Promise 🎯

Task1 1'de elediyiniz ***Callback*** tapshirigini yeniden yeni .js file'da etmelisiniz!
Bu sefer ~~Callback~~ yox, ***Promise*** istifade etmelisiniz!
