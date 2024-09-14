package hs;
/**
 * @author Natnael Tesfaye
 * @version 09/14/2024
 */
public class Solution {
    private String id; //User id 
    private String requestId; //User request id
    private String urlId; //Url id 
    private String description; //description
    private int pointsAwarded; //points awarded 
    /**
     * Solution 
     * 
     * @param id 
     *            is the id of the user 
     * @param requestId  
     *            is the requested id  
     * @param urlId 
     *            is the url id 
     * @param description 
     *            is the description
     * @param pointsAwarded 
     *            is the points awarded 
     */
    public Solution(String id, String requestId, String urlId, String description, int pointsAwarded)
    {
        this.id = id;
        this.requestId = requestId; 
        this.urlId = urlId;
        this.pointsAwarded = pointsAwarded; 
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
     * Set the requestId
     *
     * @param RequestId
     *            is the requestId
     */
    public void setRequestId(String RequestId) {
        requestId = RequestId;
    }
    /**
     * Get the requestId
     *
     * @return requestId
     */
    public String getRequestId() {
        return requestId;
    }
    /**
     * Set the urlId
     *
     * @param UrlId
     *            is the urlId
     */
    public void setUrlId(String UrlId) {
        urlId = UrlId;
    }
    /**
     * Get the urlId
     *
     * @return urlId
     */
    public String getUrlId() {
        return urlId;
    }
    /**
     * Set the description
     *
     * @param Description
     *            is the description
     */
    public void setDescription(String Description) {
        description = Description;
    }
    /**
     * Get the description
     *
     * @return description
     */
    public String getDescription() {
        return description;
    }
    /**
     * Set the pointsAwarded
     *
     * @param PointsAwarded
     *            is the pointsAwarded
     */
    public void setPoints(int PointsAwarded) {
        pointsAwarded = PointsAwarded;
    }
    /**
     * Get the pointsAwarded 
     *
     * @return pointsAwarded
     */
    public int getPointsAwarded() {
        return pointsAwarded;
    }
}