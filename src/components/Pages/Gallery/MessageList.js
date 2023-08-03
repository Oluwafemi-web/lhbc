// import classes from "../../../css/gallery.module.css";
// import MessageItems from "./MessageItems";
// export default function MessageList(props) {
//   return (
//     <div className={classes.galleryMessageList}>
//       <div className={classes.galleryMessageListContainer}>
//         <input
//           type="checkbox"
//           name=""
//           id="gridAndFlex"
//           className={classes.messageDisplayType}
//         />
//         <label htmlFor="gridAndFlex" className={classes.gridAndFlex}>
//           <span className={classes.displayToggle} />
//         </label>
//         <div className={classes.messageGallery}>
//           {props.message &&
//             props.message.map((item, index) => (
//               <MessageItems
//                 key={index}
//                 title={item.title}
//                 image={item.image.asset.url}
//                 date={item.date}
//                 description={item.description}
//                 preacher={item.preacher}
//                 audio={item.audioURL}
//               />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";

import { Pagination } from "@mui/material";
import classes from "../../../css/gallery.module.css";
import MessageItems from "./MessageItems";

export default function MessageList(props) {
  const totalItems = props.message.length;
  const itemsPerPage = 6;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const messagesToShow = props.message.slice(startIndex, endIndex);

  return (
    <div className={classes.galleryMessageList}>
      <div className={classes.galleryMessageListContainer}>
        <input
          type="checkbox"
          name=""
          id="gridAndFlex"
          className={classes.messageDisplayType}
        />
        <label htmlFor="gridAndFlex" className={classes.gridAndFlex}>
          <span className={classes.displayToggle} />
        </label>
        <div className={classes.messageGallery}>
          {messagesToShow.map((item, index) => (
            <MessageItems
              key={index}
              title={item.title}
              image={item.image.asset.url}
              date={item.date}
              description={item.description}
              preacher={item.preacher}
              audio={item.audioURL}
            />
          ))}
        </div>
        {/* Pagination component */}
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}
