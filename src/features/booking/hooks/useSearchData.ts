import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";

const useSearchData = () => {
  const flightSearch = useAppSelector((state: RootState) => state.flightSearch);
  const dispatch = useAppDispatch();

  return { flightSearch, dispatch };
};

export default useSearchData;
