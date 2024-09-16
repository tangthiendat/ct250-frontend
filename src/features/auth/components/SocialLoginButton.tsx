import { Button } from "antd";

const SocialLoginButton: React.FC = () => (
  <>
    <Button
      type="default"
      size="large"
      icon={
        <img src="/google_logo.png" alt="Google logo" className="h-6 w-6" />
      }
    >
      Đăng ký với Google
    </Button>
  </>
);

export default SocialLoginButton;
