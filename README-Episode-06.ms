TODO: How to get data from API:- There is two approch.
-- 1: UI Loads ----> API ----> Render Page
-- 2: UI Load ----> Render page ----> API ----> Render page
-- We will follow second Approch.

TODO: useEffect Hocks:-
-- Its a func and takes two argument 1: callback function 2: Dependecny
-- The callback func call after Body component render.
-- If no dependency array ==> useEffect is called on every render.
-- If dependency array ia empty =[] ==> useEffect called on inisial render(just once).
-- If dependency array is [arrData] ==> useEffect called everytime arrData is updated.

TODO: Shimmer UI:- We load fake page until we get data from the API.



-- Rendering based of condition is called conditional rendering.

TODO: useState():- To make variable dynamic(Local state variable in side you function component.)
-- When ever state variable updates, react triggers a reconciliation cycle(re-render the component).
-- Never use useState outside body.
-- Allways call useState on he top.
-- Never use useState call in conditional block, loop & in function.