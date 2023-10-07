import { useMemo } from "react";

export const usePagination = (totalPages) => {
	const getPagesArray = useMemo(() => {
        let result = []
		if (totalPages) {
			for (let i = 0; i < totalPages; i++) {
                result.push(i+1)
            }
            return result
		}
        return []
	}, [totalPages]);
    return getPagesArray
};
