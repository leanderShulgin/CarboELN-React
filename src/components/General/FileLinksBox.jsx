import React from "react";

const FileLinksBox = () => {
  return (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <h3>Files</h3>
        <p>
          In this section you can add any files to the experiment. Files are not
          uploadable though, they should be linked from a cloud storage service
          like Google Drive, Dropbox, OneCloud or any other. Add the link to
          your file and the description of the conYtent. You will be able to
          open any linked filed from here.{" "}
        </p>
      </div>
      <div className="col-md-1"></div>
    </div>
  );
};

export default FileLinksBox;
