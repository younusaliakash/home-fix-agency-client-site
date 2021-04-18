# __Home Fix__
Live Link: https://homefix-service-acency.web.app/

## **_Website features_** :

> Home Page has total 8 Section.

> 2 Dynamaic Section (Services and Testimonials) . User will place order by clicking Get Service. 

> User Dashboard . User will see order history,Order status, and write review about the services from User Dashboard.
    
> Admin Dashboard. Admin will see total orders,manage orders, add new service, remove service and make new admin from this dashboard.

> User authentication and payment system.


## **_Usage Function_** :
1. Hooks 
    * useEffect()
    ```js
    useEffect(() =>{
        fetch("url")
        .then((response) => response.json())
        .then( data => setData(data))
    },[])
    ```
    * useState()
    ```js
    const [name, setName] = useState([])
    ```
    * useParams()
    ```js
    const {id} = useParams()
    ```
2. React Router
    * Router
    * Route
    * Switch
    * Link

3. Authentication System (Using Firebase)
    * Create account by Email and Password
    * Log in Using social Provider
    * Log in using exiting email and password.

4. CRUD (Using MongoDB)
    
    | Thank you very much. |
    | ------------- |