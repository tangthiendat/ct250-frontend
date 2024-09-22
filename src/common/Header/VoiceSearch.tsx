import { AudioOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { useState } from "react";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const VoiceSearch: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showInput, setShowInput] = useState(false);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setError("Trình duyệt của bạn không hỗ trợ tìm kiếm bằng giọng nói.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "vi-VN"; // Thiết lập ngôn ngữ tiếng Việt
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      setError(null);
    };

    recognition.onresult = (event: SpeechRecognitionResult) => {
      const speechResult = (event as any).results[0][0].transcript;
      setTranscript(speechResult);
      onSearch(speechResult);
      setIsListening(false);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
      setError("Có lỗi xảy ra trong quá trình nhận diện giọng nói.");
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <div className="voice-search">
      {showInput ? (
        <Input
          placeholder="Tìm kiếm bằng giọng nói"
          value={transcript}
          readOnly
          suffix={
            <Button
              icon={<CloseOutlined />}
              onClick={() => setShowInput(false)}
            />
          }
        />
      ) : (
        <Button
          icon={<AudioOutlined />}
          onClick={() => {
            setShowInput(true);
            startListening();
          }}
          disabled={isListening}
        >
          {isListening ? "Đang nghe..." : "Tìm kiếm"}
        </Button>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default VoiceSearch;
