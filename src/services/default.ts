import axiosClient from '@/lib/axios'


// veri çekme kodu;
export const getGenerals = async () => {
    const { data } = await axiosClient.get('/generals')
    return data
}
// veri gönderme kodu;
export const changePassword = async ({email, oldPassword, newPassword }: /*burada type tanımlayarak belirtilicek*/any) => {
    return axiosClient.post('/auth/change_password', {
      email,
      oldPassword,
      newPassword,
    })
  }