import Paragraph from "../../../UI/Paragraph";
import Button from "../../../UI/Button";

const CaseThanks = () => {
    return (
      <>
        <div className="container py-5  wow animate__animated animate__fadeInLeft animate__delay">
          <div className="text-center pt-145 form-type">
            <Paragraph className="title-white mb-5 ">
              Thank you for taking the time to share your details.
            </Paragraph>
            <Button
              to="/"
              tagType="link"
              type="submit"
              className="btn-blue btn-scale "
            >
              Back to home
            </Button>
            {/* <span>{result}</span> */}
          </div>
        </div>
      </>
    );
};
export default CaseThanks;