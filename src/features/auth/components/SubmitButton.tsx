import { Form } from "antd";

const SubmitButton: React.FC<{ loading: boolean }> = ({ loading }) => (
  <Form.Item>
    <button
      type="submit"
      className="focus:shadow-outline mt-2 w-full rounded bg-blue-700 py-2 font-bold text-white hover:bg-blue-900 focus:outline-none"
      disabled={loading}
    >
      Đăng nhập
    </button>
  </Form.Item>
);

export default SubmitButton;
