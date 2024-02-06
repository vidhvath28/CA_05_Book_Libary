import React, { useState } from "react";
import BookList from "./Components/BookList";
import RegisterForm from "./Components/RegisterForm";
import SearchBar from "./Components/SearchBar";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [books, setBooks] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
    <Navbar />

    <Routes>
      <Route
        path="/"
        element={
          <>
            <SearchBar onSearch={handleSearch} />
            <BookList books={books} searchTerm={searchTerm} />
          </>
        }
      />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  </div>
  );
};

export default App;
