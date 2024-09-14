/**
 *  Request 
 * 
 * @author Omer Ahmed
 * @version 09.14.2024
 */
public class Request {
    private String id;
    private String requestId;
    private String userId;
    private String description;
    private int pointsAwarded;

    public Request(String id, String requestId, String userId, String description, int pointsAwarded) {
        this.id = id;
        this.requestId = requestId;
        this.userId = userId;
        this.description = description;
        this.pointsAwarded = pointsAwarded;
    }
    public String getId() {
        return id;
    }
    
    public void setId(String id) {
        this.id = id;
    }

    public String getRequestId() {
        return requestId;
    }

    public void setRequestId(String requestid) {
        this.requestId = requestId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
    
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPointsAwarded() {
        return pointsAwarded;
    }
    
    public void setPointsAwarded(int points) {
        this.pointsAwarded = points;
    }
}