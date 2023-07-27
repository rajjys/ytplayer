import React, {useState} from "react";
import { useRouter } from "next/router";
import { TextField, Button } from "@mui/material";

const Download = () => {
    const router = useRouter();
    const { slug } = router.query;
    console.log(slug);

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
      <div className="text-center margin-auto pt-8 bg-gray-300 flex flex-row justify-around pb-4">
        <TextField
          id="url-textfield"
          label="Video URL here"
          variant="outlined"
          value={url}
          onChange={handleUrlChange}
          onKeyDown={handleKeyDown}
          error={error}
          required
          className="w-3/4 ml-32 mr-4"
          InputProps={{ sx: { borderRadius: "15px" } }}
        />
        <Button variant="contained" color="primary" sx={{borderRadius: "15px"}} onClick={handleButtonClick} className="w-1/4 mr-32 ml-4">
          Validate
        </Button>
      </div>
    );
}

export default Download;