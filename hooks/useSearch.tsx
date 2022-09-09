import { debounce } from "lodash";
import { Dispatch, SetStateAction, useState } from "react";

const debounceFn = debounce((fn, keyword) => fn(keyword), 400);

interface Props {
  api: (
    setData: Dispatch<SetStateAction<any>>,
    keyword: string
  ) => Promise<void>;
}

const useSearch = ({ api }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");
  const [data, setData] = useState<any[] | null>(null);
  const fn = async (keyword: string) => {
    await api(setData, keyword);
    setLoading(false);
  };
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    debounceFn.cancel();
    setLoading(true);
    const _keyword = e.target.value;
    setKeyword(_keyword);
    e.target.value.length > 0 && (await debounceFn(fn, _keyword));
  };
  return { onChange, loading, keyword, setKeyword, data };
};

export default useSearch;
