/**
 * @author Natnael Tesfaye
 * @version 09/14/2024
 */
public class User {
    private String id; //User id 
    private String email; //User email 
    private String password; //User password
    private int points; //User points 
    /**
     * User
     * 
     * @param id 
     *            is the id of the user 
     * @param email 
     *            is the email of the user 
     * @param password 
     *            is the password of the user 
     * @param points 
     *            is the points of the user 
     */
    public User(String id, String email, String password, int points)
    {
        this.id = id;
        this.email = email; 
        this.password = password;
        this.points = points; 
    }
    /**
     * Set the id
     *
     * @param Id
     *            is the id
     */
    public void setId(String Id) {
        id = Id;
    }
    /**
     * Get the id
     *
     * @return id 
     */
    public String getId() {
        return id;
    }
    /**
     * Set the email
     *
     * @param Email
     *            is the email
     */
    public void setEmail(String Email) {
        email = Email;
    }
    /**
     * Get the email
     *
     * @return email 
     */
    public String getEmail() {
        return email;
    }
    /**
     * Set the Password
     *
     * @param Password
     *            is the password
     */
    public void setPassword(String Password) {
        password = Password;
    }
    /**
     * Get the password
     *
     * @return id 
     */
    public String getPassword() {
        return password;
    }
    /**
     * Set the points
     *
     * @param Points
     *            is the points
     */
    public void setPoints(int Points) {
        points = Points;
    }
    /**
     * Get the points 
     *
     * @return points
     */
    public int getPoints() {
        return points;
    }
}