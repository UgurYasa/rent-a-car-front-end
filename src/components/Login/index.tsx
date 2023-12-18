import {
  Button,
  Card,
  CardBody,
  Input,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tab,
  Tabs,
  User,
} from "@nextui-org/react";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";

export default function Login() {
  const [isShow, setIsShow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [selected, setSelected] = useState("login");
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleChangeLogin = (field: string, value: any) => {
    setFormLogin((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleLogin = () => {
    // Validation logic
    if (!formLogin.email || !formLogin.password) {
      console.error("Email and password are required.");
      return;
    } else if (
      formLogin.email === "emirozturk" &&
      formLogin.password === "1234"
    ) {
      setIsLogin(true);
      console.log("Logging in with:", formLogin.email, formLogin.password);
    }
  };
  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        {isLogin ? (
          <div
            className="bg-[#00285f] text-white hover:scale-125"
            onClick={() => {
              setIsShow(true);
            }}
          >
            <User
              name={formLogin.email}
              description=""
              avatarProps={{
                src: "https://banner2.cleanpng.com/20180622/tqt/kisspng-computer-icons-user-clip-art-consignee-5b2d25107181a2.1674732415296852644649.jpg",
                alt: formLogin.email
                  ? formLogin.email.charAt(0).toString()
                  : "",
              }}
            />
          </div>
        ) : (
          <Button
            className="bg-[#00285f] text-white hover:scale-125"
            onClick={() => {
              setIsShow(true);
            }}
          >
            <FaUser size={20} /> Üye Girişi
          </Button>
        )}
      </PopoverTrigger>

      {isShow && (
        <PopoverContent>
          <div className="flex flex-col w-full">
            {isLogin ? (
              <Button
                onClick={() => {
                  setIsLogin(false);
                  setIsShow(false);
                }}
                className="flex w-40"
              >
                <IoExitOutline /> Çıkış Yap
              </Button>
            ) : (
              <Card className="w-full h-full">
                <CardBody className="overflow-hidden">
                  <Tabs
                    fullWidth
                    size="md"
                    aria-label="Tabs form"
                    selectedKey={selected}
                    onSelectionChange={(key: React.Key) =>
                      setSelected(key as string)
                    }
                  >
                    <Tab key="login" title="Giriş Yap">
                      <form className="flex flex-col gap-4">
                        <Input
                          isRequired
                          label="E-Posta"
                          placeholder="E-posta giriniz"
                          type="email"
                          onChange={(e) =>
                            handleChangeLogin("email", e.target.value)
                          }
                        />
                        <Input
                          isRequired
                          label="Şifre"
                          placeholder="Şifre Giriniz"
                          type="password"
                          onChange={(e) =>
                            handleChangeLogin("password", e.target.value)
                          }
                        />
                        <p className="text-center text-small">
                          Hesabınız yok mu?{" "}
                          <Link
                            size="sm"
                            onPress={() => setSelected("sign-up")}
                          >
                            Kayıt Ol
                          </Link>
                        </p>
                        <div className="flex gap-2 justify-end">
                          <Button
                            fullWidth
                            color="primary"
                            onClick={() => {
                              setIsShow(false);
                              handleLogin();
                            }}
                          >
                            Giriş Yap
                          </Button>
                        </div>
                      </form>
                    </Tab>
                    <Tab key="sign-up" title="Kayıt Ol">
                      <form className="flex flex-col gap-4 h-[300px]">
                        <Input
                          isRequired
                          label="Ad"
                          placeholder="Adınızı giriniz"
                          type="text"
                        />
                        <Input
                          isRequired
                          label="E-posta"
                          placeholder="E-posta giriniz"
                          type="email"
                        />
                        <Input
                          isRequired
                          label="Şifre"
                          placeholder="Şifre giriniz"
                          type="password"
                        />
                        <p className="text-center text-small">
                          Zaten hesabınız var mı?{" "}
                          <Link size="sm" onPress={() => setSelected("login")}>
                            Giriş Yap
                          </Link>
                        </p>
                        <div className="flex gap-2 justify-end">
                          <Button
                            fullWidth
                            color="primary"
                            onClick={() => {
                              setSelected("login");
                            }}
                          >
                            Kayıt Ol
                          </Button>
                        </div>
                      </form>
                    </Tab>
                  </Tabs>
                </CardBody>
              </Card>
            )}
          </div>
        </PopoverContent>
      )}
    </Popover>
  );
}
