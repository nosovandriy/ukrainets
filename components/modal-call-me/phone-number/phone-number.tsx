import ReactPhoneInput from 'react-phone-input-2'
import { fontService } from '@services/font-service';
import classNames from 'classnames';

type Props = {
  clientPhoneNumber: string;
  setClientPhoneNumber: (phoneNumber: string) => void;
}

export const PhoneNumber: React.FC<Props> = ({
  clientPhoneNumber,
  setClientPhoneNumber,
}) => {

  return (
    <div
      className={
        classNames(
          fontService.getMachinaFont().className,
        )
      }
    >
      <ReactPhoneInput
        containerClass={"phoneWrapper"}
        inputClass={"phoneNumber"}
        buttonClass={"phoneFlag"}
        dropdownClass={"custom-dropdown"}
        countryCodeEditable={false}
        preferredCountries={['ua', 'gb']}
        country={'ua'}
        regions={'europe'}
        value={clientPhoneNumber}
        onChange={(event) => setClientPhoneNumber(event)}
      />
    </div >
  )
}
