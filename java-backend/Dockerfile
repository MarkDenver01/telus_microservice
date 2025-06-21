FROM eclipse-temurin:19-jdk-alpine

WORKDIR /app

COPY target/java-backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
