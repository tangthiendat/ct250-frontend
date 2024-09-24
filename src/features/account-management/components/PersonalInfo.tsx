import { Avatar, Card, Descriptions } from "antd";
import { useAvatarUrl } from "../../auth/hooks/UseAvatarUrl";
import { useLoggedInUser } from "../../auth/hooks/UseLoggedInUser";

const PersonalInfo: React.FC = () => {
  const { user: userInfo } = useLoggedInUser();

  const avatarUrl = useAvatarUrl(userInfo ?? null);
  const personalInfo = {
    name: userInfo?.firstName + " " + userInfo?.lastName,
    dob: userInfo?.dateOfBirth,
    identityNumber: userInfo?.identityNumber,
    phone: userInfo?.phoneNumber,
    email: userInfo?.email,
    nationality: userInfo?.country.countryName,
  };
  // console.log(avatarUrl);

  return (
    <>
      <Card
        className="flex-1 shadow-lg md:shadow-md"
        title={<p className="">Thông tin cá nhân</p>}
        bordered={true}
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-center">
            {avatarUrl === null ? (
              <Avatar shape="square" size={120}>
                {personalInfo.name[0]}
              </Avatar>
            ) : (
              <Avatar
                shape="square"
                size={120}
                src={<img src={avatarUrl} alt="avatar" />}
              />
            )}
          </div>
          <Descriptions
            bordered
            column={{
              xs: 1,
              sm: 1,
              md: 1,
              lg: 1,
              xl: 1,
              xxl: 1,
            }}
          >
            <Descriptions.Item label={<strong>Họ tên</strong>}>
              <strong>{personalInfo.name}</strong>
            </Descriptions.Item>
            <Descriptions.Item label={<strong>Ngày sinh</strong>}>
              <strong>{personalInfo.dob}</strong>
            </Descriptions.Item>
            <Descriptions.Item label={<strong>Số hộ chiếu</strong>}>
              <strong>{personalInfo.identityNumber}</strong>
            </Descriptions.Item>
            <Descriptions.Item label={<strong>Số điện thoại</strong>}>
              <strong>{personalInfo.phone}</strong>
            </Descriptions.Item>
            <Descriptions.Item label={<strong>Email</strong>}>
              <strong>{personalInfo.email}</strong>
            </Descriptions.Item>
            <Descriptions.Item label={<strong>Quốc tịch</strong>}>
              <strong>{personalInfo.nationality}</strong>
            </Descriptions.Item>
          </Descriptions>
        </div>
      </Card>
    </>
  );
};

export default PersonalInfo;
