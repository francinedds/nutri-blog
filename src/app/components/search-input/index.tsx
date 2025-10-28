import { Search } from "lucide-react";

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({
  placeholder = "Search...",
  value,
  onChange,
}: SearchInputProps) {
  return (
    <div className="flex items-center border border-[#9DAB91] rounded-none px-3 py-2 w-full max-w-sm">
      <Search className="text-[#9DAB91] w-5 h-5 mr-2" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent outline-none text-[#9DAB91] placeholder-[#9DAB91]"
      />
    </div>
  );
}
