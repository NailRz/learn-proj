import React from 'react';
import MyButton from '../button/MyButton';
import { usePagination } from '../../hooks/usePagination';

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = usePagination(totalPages);
    return (
        <div style = {{marginInline: 15}} className="page__wraper" >
				{pagesArray.map((p) => (
					<MyButton onClick = {() => changePage(p)} key = {p} className={page === p ? "page__button page__button__current" :  "page__button"}>
						{p}
					</MyButton>
				))}
			</div>
    );
};

export default Pagination;