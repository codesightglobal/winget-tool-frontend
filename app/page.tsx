import SearchForm from "./components/SearchForm";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <SearchForm />
      </main>
    </div>
  );
}
