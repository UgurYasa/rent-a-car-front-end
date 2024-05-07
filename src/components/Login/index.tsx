import {
  handleChangeLogin,
  handleChangeRegister,
  setIsLogin,
  setIsShow,
  setSelected,
  successfullyLogin
} from "@/redux/userSlice";
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
import React from "react";
import { FaUser } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";

export default function Login() {
  const dispatch = useDispatch();
  const { isLogin, isShow, selected, formLogin } = useSelector(
    (state: any) => state.user
  );
  const cookies = new Cookies();
  var mail = cookies.get("email");

  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        {isLogin ? (
          <div
            className="bg-[#00285f] text-white hover:scale-125"
            onClick={() => {
              dispatch(setIsShow(true));
            }}
          >
            <User
              name={mail ? mail : ""}
              description=""
              avatarProps={{
                src: "https://banner2.cleanpng.com/20180622/tqt/kisspng-computer-icons-user-clip-art-consignee-5b2d25107181a2.1674732415296852644649.jpg",
                alt: mail ? mail.charAt(0).toString() : "",
              }}
            />
          </div>
        ) : (
          <Button
            className="bg-[#00285f] text-white hover:scale-125"
            onClick={() => {
              dispatch(setIsShow(true));
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
                  dispatch(setIsLogin(false));
                  dispatch(setIsShow(false));
                  cookies.remove("token");
                  cookies.remove("email");
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
                      dispatch(setSelected(key as string))
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
                            dispatch(
                              handleChangeLogin({
                                field: "email",
                                value: e.target.value,
                              })
                            )
                          }
                        />
                        <Input
                          isRequired
                          label="Şifre"
                          placeholder="Şifre Giriniz"
                          type="password"
                          onChange={(e) =>
                            dispatch(
                              handleChangeLogin({
                                field: "password",
                                value: e.target.value,
                              })
                            )
                          }
                        />
                        <p className="text-center text-small">
                          Hesabınız yok mu?{" "}
                          <Link
                            size="sm"
                            onPress={() => dispatch(setSelected("sign-up"))}
                          >
                            Kayıt Ol
                          </Link>
                        </p>
                        <div className="flex gap-2 justify-end">
                          <Button
                            type="submit"
                            fullWidth
                            color="primary"
                            onClick={() => {
                              dispatch(successfullyLogin());
                              cookies.set("email", formLogin.email);
                            }}
                          >
                            Giriş Yap
                          </Button>
                        </div>
                      </form>
                    </Tab>
                    <Tab key="sign-up" title="Kayıt Ol">
                      <form className="flex flex-col gap-4 h-[350px]">
                        <Input
                          isRequired
                          label="Ad"
                          placeholder="Adınızı giriniz"
                          type="text"
                          onChange={(e) =>
                            dispatch(
                              handleChangeRegister({
                                field: "firstName",
                                value: e.target.value,
                              })
                            )
                          }
                        />
                        <Input
                          isRequired
                          label="Soyad"
                          placeholder="Adınızı giriniz"
                          type="text"
                          onChange={(e) =>
                            dispatch(
                              handleChangeRegister({
                                field: "lastName",
                                value: e.target.value,
                              })
                            )
                          }
                        />
                        <Input
                          isRequired
                          label="E-posta"
                          placeholder="E-posta giriniz"
                          type="email"
                          onChange={(e) =>
                            dispatch(
                              handleChangeRegister({
                                field: "email",
                                value: e.target.value,
                              })
                            )
                          }
                        />
                        <Input
                          isRequired
                          label="Şifre"
                          placeholder="Şifre giriniz"
                          type="password"
                          onChange={(e) =>
                            dispatch(
                              handleChangeRegister({
                                field: "password",
                                value: e.target.value,
                              })
                            )
                          }
                        />
                        <p className="text-center text-small">
                          Zaten hesabınız var mı?{" "}
                          <Link
                            size="sm"
                            onPress={() => dispatch(setSelected("login"))}
                          >
                            Giriş Yap
                          </Link>
                        </p>
                        <div className="flex gap-2 justify-end">
                          <Button
                            fullWidth
                            color="primary"
                            onClick={() => {
                              dispatch(setSelected("login"));
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
