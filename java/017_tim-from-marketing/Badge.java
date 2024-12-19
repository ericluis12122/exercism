class Badge {
    public String print(Integer id, String name, String department) {  	
    	String idText = (id == null) ? "" : "[" + id + "] - ";
        department = (department == null) ? "owner" : department;
        return idText + name + " - " + department.toUpperCase();
    }    
}