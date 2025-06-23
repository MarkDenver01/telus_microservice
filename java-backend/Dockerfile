FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

COPY java-backend/target/java-backend-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080

ENTRYPOINT ["/wait-for-it.sh", "db:3306", "--", "java", "-jar", "app.jar"]