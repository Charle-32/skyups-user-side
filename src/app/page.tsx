'use client';
import DateRange from '@/components/DateRangePicker/page';
import SelectField from '@/components/SelectInput/page';
import QuantityInput from '@/components/QuantityInput/page';
import React, { useEffect, useState, useCallback } from 'react';
import { SingleValue } from 'react-select';
import moment from 'moment';
import { ApiServices } from '@/commonService/apiservices/apiservices';
import { useRouter } from 'next/navigation';
import { setTicketDetails } from '@/redux/slices/ticketDetailsSlice';
import { useDispatch } from 'react-redux';

interface FormType {
  departureLocation: OptionType;
  arrivalLocation: OptionType;
  departureDate: string;
  returnDate: string;
  isRoundTrip: OptionType;
  adult: number;
  children: number;
  classOfTravel: OptionType;
}

interface OptionType {
  label: string;
  value: string;
}

const classOption = [
  { value: '', label: 'Select Cabin Class' },
  { value: 'Economy', label: 'Economy' },
  { value: 'Business', label: 'Business' },
  { value: 'FirstClass', label: 'First Class' },
];
const tripOption = [
  { value: '', label: 'Select' },
  { value: 'One way', label: 'One way' },
  { value: 'Round trip', label: 'Round trip' },
];
interface Airport {
  iata_code: string;
  city: string;
  country: string;
}
const Page = () => {
  const initialState: FormType = {
    departureLocation: { value: '', label: 'Select' },
    arrivalLocation: { value: '', label: 'Select' },
    departureDate: '',
    returnDate: '',
    isRoundTrip: tripOption[1],
    adult: 1,
    children: 0,
    classOfTravel: classOption[0],
  };
  const navigate = useRouter()
  const [formData, setFormData] = useState<FormType>(initialState);
  const [todayDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [minReturnDate, setMinReturnDate] = useState(todayDate);
  const [airportList, setAirportList] = useState<OptionType[]>([]);
  const dispatch = useDispatch();

  const getIATAData = useCallback(async () => {
    const url = '/airports';
    try {
      const res = await ApiServices(url);
      if (res.data) {
        const aitOption = res.data.map((ele: Airport) => ({
          value: ele.iata_code,
          label: `${ele.iata_code} - ${ele.city}, ${ele.country}`,
        }));
        setAirportList(aitOption);
      } else {
        console.error(res.error);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    getIATAData();
  }, [getIATAData]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'departureDate') {
      setMinReturnDate(value);
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChangeForClass = (option: SingleValue<OptionType>, name: string) => {
    if (option) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: option,
      }));
    }
  };

  const handleQuantityChange = (name: string, newValue: number) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const routeFn = (endpoint: string) => {
    navigate.push(endpoint)
  }


  const onClickSearch = () => {
    dispatch(
      setTicketDetails([formData])
    )

    routeFn('/search-flight')
  }


  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-md-8 col-10 offset-md-2 offset-1 shadow rounded p-md-5 p-3 mb-2 main_container">
          <div className="container">
            <div className="fs-4 mb-4">Flight Booking</div>
            <div className="row">
              <div className="col-md-6">
                <SelectField
                  label="From"
                  name="departureLocation"
                  value={formData.departureLocation}
                  onChange={(e) => handleSelectChangeForClass(e, 'departureLocation')}
                  options={airportList}
                />
              </div>
              <div className="col-md-6">
                <SelectField
                  label="To"
                  name="arrivalLocation"
                  value={formData.arrivalLocation}
                  onChange={(e) => handleSelectChangeForClass(e, 'arrivalLocation')}
                  options={airportList}
                />
              </div>

              <div className="col-md-4">
                <SelectField
                  label="Trip Type"
                  name="classOfTravel"
                  value={formData.isRoundTrip}
                  onChange={(e) => handleSelectChangeForClass(e, 'isRoundTrip')}
                  placeholder="Select Class of Travel"
                  options={tripOption}
                />
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className={formData.isRoundTrip.value !== 'Round trip' ? 'col-12' : 'col-md-6'}>
                    <DateRange
                      label="Departure Date"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={onChangeHandler}
                      min={todayDate}
                    />
                  </div>
                  {formData.isRoundTrip.value === 'Round trip' && (
                    <div className="col-md-6">
                      <DateRange
                        label="Return Date"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={onChangeHandler}
                        min={minReturnDate}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <SelectField
                  name="classOfTravel"
                  value={formData.classOfTravel}
                  onChange={(e) => handleSelectChangeForClass(e, 'classOfTravel')}
                  placeholder="Select Class of Travel"
                  options={classOption}
                />
              </div>
              <div className="col-md-4">
                <QuantityInput
                  label="Adult"
                  name="adult"
                  value={formData.adult}
                  onChange={(newValue) => handleQuantityChange('adult', newValue)}
                />
              </div>
              <div className="col-md-4">
                <QuantityInput
                  label="Children"
                  name="children"
                  value={formData.children}
                  onChange={(newValue) => handleQuantityChange('children', newValue)}
                />

              </div>


            </div>
            <div className="my-3 text-end">
              <button className="btn btn-secondary" onClick={() => onClickSearch()}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
