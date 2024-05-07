// "use client";
// import { createUser, login } from "@/services/auth";
// import { Login, Register } from "@/types/auth";
// import {
//   Button,
//   Card,
//   CardBody,
//   Input,
//   Link,
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
//   Tab,
//   Tabs,
//   User,
// } from "@nextui-org/react";
// import { useMutation } from "@tanstack/react-query";
// import React, { useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { IoExitOutline } from "react-icons/io5";
// import Cookies from "universal-cookie";

// export default function Login() {
//   const cookies = new Cookies();

//   const mutation1 = useMutation({
//     mutationFn: (data: Login) => login(data),
//     onSuccess: (response) => {
//       if (response.status === 200) {
//         cookies.set("token", response.data.data.token, { path: "/" });
//         cookies.set("email", formLogin.email, { path: "/" });
//         setIsLogin(true);
//         console.log("Login successfull");        
//       }
//     },
//     onSettled: () => {
//       setIsLoading(false);
//     },
//   });
//   const mutation2 = useMutation({
//     mutationFn: (data: Register) => createUser(data),
//     onSuccess: (response) => {
//       if (response.status === 200) {
//         alert("Register successfully");        
//       }
//     },
//     onSettled: () => {
//       setIsLoading(false);
//     },
//   });
  

//   const [isLoading, setIsLoading] = useState(false);




//   var mail = cookies.get("email");
//   const [isShow, setIsShow] = useState(false);
//   const [isLogin, setIsLogin] = useState(mail ? true : false);
//   const [selected, setSelected] = useState("login");
//   const [formLogin, setFormLogin] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChangeLogin = (field: string, value: any) => {
//     setFormLogin((prevData) => ({
//       ...prevData,
//       [field]: value.toString(),
//     }));
//   };

//   const [formRegister, setFormRegister] = useState({
//     email:"",
//     password:"",
//     firstName:"",
//     lastName:"",
//   });

//   const handleChangeRegister = (field: string, value: any) => {
//     setFormRegister((prevData) => ({
//       ...prevData,
//       [field]: value.toString(),
//     }));
//   };


//   return (
//     <Popover placement="bottom-start">
//       <PopoverTrigger>
//         {isLogin ? (
//           <div
//             className="bg-[#00285f] text-white hover:scale-125"
//             onClick={() => {
//               setIsShow(true);
//             }}
//           >
//             <User
//               name={mail ? mail : ""}
//               description=""
//               avatarProps={{
//                 src: "https://banner2.cleanpng.com/20180622/tqt/kisspng-computer-icons-user-clip-art-consignee-5b2d25107181a2.1674732415296852644649.jpg",
//                 alt: mail
//                   ? mail.charAt(0).toString()
//                   : "",
//               }}
//             />
//           </div>
//         ) : (
//           <Button
//             className="bg-[#00285f] text-white hover:scale-125"
//             onClick={() => {
//               setIsShow(true);
//             }}
//           >
//             <FaUser size={20} /> Üye Girişi
//           </Button>
//         )}
//       </PopoverTrigger>

//       {isShow && (
//         <PopoverContent>
//           <div className="flex flex-col w-full">
//             {isLogin ? (
//               <Button
//                 onClick={() => {
//                   setIsLogin(false);
//                   setIsShow(false);
//                   cookies.remove("token");
//                   cookies.remove("email");
//                 }}
//                 className="flex w-40"
//               >
//                 <IoExitOutline /> Çıkış Yap
//               </Button>
//             ) : (
//               <Card className="w-full h-full">
//                 <CardBody className="overflow-hidden">
//                   <Tabs
//                     fullWidth
//                     size="md"
//                     aria-label="Tabs form"
//                     selectedKey={selected}
//                     onSelectionChange={(key: React.Key) =>
//                       setSelected(key as string)
//                     }
//                   >
//                     <Tab key="login" title="Giriş Yap">
//                       <form className="flex flex-col gap-4">
//                         <Input
//                           isRequired
//                           label="E-Posta"
//                           placeholder="E-posta giriniz"
//                           type="email"
//                           onChange={(e) =>
//                             handleChangeLogin("email", e.target.value)
//                           }
//                         />
//                         <Input
//                           isRequired
//                           label="Şifre"
//                           placeholder="Şifre Giriniz"
//                           type="password"
//                           onChange={(e) =>
//                             handleChangeLogin("password", e.target.value)
//                           }
//                         />
//                         <p className="text-center text-small">
//                           Hesabınız yok mu?{" "}
//                           <Link
//                             size="sm"
//                             onPress={() => setSelected("sign-up")}
//                           >
//                             Kayıt Ol
//                           </Link>
//                         </p>
//                         <div className="flex gap-2 justify-end">
//                           <Button
//                           type="submit"
//                             fullWidth
//                             color="primary"
//                             onClick={() => {
//                               setIsShow(false);
//                               mutation1.mutate(formLogin);
//                             }}
//                           >
//                             Giriş Yap
//                           </Button>
//                         </div>
//                       </form>
//                     </Tab>
//                     <Tab key="sign-up" title="Kayıt Ol">
//                       <form className="flex flex-col gap-4 h-[350px]">
//                         <Input
//                           isRequired
//                           label="Ad"
//                           placeholder="Adınızı giriniz"
//                           type="text"
//                           onChange={(e) =>
//                             handleChangeRegister("firstName", e.target.value)
//                           }
//                         />
//                          <Input
//                           isRequired
//                           label="Soyad"
//                           placeholder="Adınızı giriniz"
//                           type="text"
//                           onChange={(e) =>
//                             handleChangeRegister("lastName", e.target.value)
//                           }
//                         />
//                         <Input
//                           isRequired
//                           label="E-posta"
//                           placeholder="E-posta giriniz"
//                           type="email"
//                           onChange={(e) =>
//                             handleChangeRegister("email", e.target.value)
//                           }
//                         />
//                         <Input
//                           isRequired
//                           label="Şifre"
//                           placeholder="Şifre giriniz"
//                           type="password"
//                           onChange={(e) =>
//                             handleChangeRegister("password", e.target.value)
//                           }
//                         />
//                         <p className="text-center text-small">
//                           Zaten hesabınız var mı?{" "}
//                           <Link size="sm" onPress={() => setSelected("login")}>
//                             Giriş Yap
//                           </Link>
//                         </p>
//                         <div className="flex gap-2 justify-end">
//                           <Button
//                             fullWidth
//                             color="primary"
//                             onClick={() => {
//                               setSelected("login");
//                               mutation2.mutate(formRegister);
//                             }}
//                           >
//                             Kayıt Ol
//                           </Button>
//                         </div>
//                       </form>
//                     </Tab>
//                   </Tabs>
//                 </CardBody>
//               </Card>
//             )}
//           </div>
//         </PopoverContent>
//       )}
//     </Popover>
//   );
// }
