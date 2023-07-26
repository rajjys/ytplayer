import React, {useState} from "react";
import { useRouter } from "next/router";
import { TextField, Button } from "@mui/material";

const Download = () => {
    const router = useRouter();
    const { slug } = router.query;


    const [url, setUrl] = useState('');
    const [error, setError] = useState(false);

    const handleUrlChange = (event) => {
        setError(false)
      setUrl(event.target.value);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleButtonClick();
        }
    }   
    const handleButtonClick = () => {
      console.log(`Validating URL: ${url}`);
      if (url === '') {
        setError(true);
        return;
      }
      setUrl('');
    };
  
    return (
      <div className="text-center margin-auto pt-8 bg-gray-300 ">
        <TextField
          id="url-textfield"
          label="Video URL here"
          variant="outlined"
          value={url}
          onChange={handleUrlChange}
          onKeyDown={handleKeyDown}
          error={error}
          required
        />
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          Validate
        </Button>
      </div>
    );
}

export default Download;