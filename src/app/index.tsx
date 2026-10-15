import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  TouchableOpacity,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CompleteMasterForm() {
  // 1. Text Fields
  const [fullName, setFullName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rawNumber, setRawNumber] = useState('');
  const [bio, setBio] = useState('');

  // 2. Stepper / Counter
  const [quantity, setQuantity] = useState(1);

  // 3. Range / Slider (1 to 10)
  const [rangeScore, setRangeScore] = useState(5);

  // 4. Date Fields
  const [day, setDay] = useState('15');
  const [month, setMonth] = useState('06');
  const [year, setYear] = useState('2000');

  // 5. Time Fields
  const [hour, setHour] = useState('09');
  const [minute, setMinute] = useState('30');
  const [timePeriod, setTimePeriod] = useState<'AM' | 'PM'>('AM');

  // 6. Star Rating (1 to 5)
  const [rating, setRating] = useState(4);

  // 7. Color Swatches
  const colorPalette = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#000000'];
  const [selectedColor, setSelectedColor] = useState(colorPalette[1]);

  // 8. Dropdown / Select
  const [country, setCountry] = useState('United States');
  const [showDropdown, setShowDropdown] = useState(false);
  const countryList = ['United States', 'United Kingdom', 'Canada', 'Germany', 'Australia', 'Japan'];

  // 9. Radio Buttons (Single Select)
  const [gender, setGender] = useState('Male');
  const genderOptions = ['Male', 'Female', 'Prefer not to say'];

  // 10. Checkboxes (Multi Select)
  const [skills, setSkills] = useState<string[]>(['React Native']);
  const availableSkills = ['React Native', 'TypeScript', 'Node.js', 'UI/UX Design'];

  // 11. Switch Toggle
  const [notifications, setNotifications] = useState(true);

  // 12. File Upload Attachment
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  // 13. Agreement Checkbox
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Toggle multi-select checkbox
  const toggleSkill = (skill: string) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };

  // Reset entire form
  const handleReset = () => {
    setFullName('');
    setSearchQuery('');
    setEmail('');
    setPhone('');
    setWebsiteUrl('');
    setPassword('');
    setShowPassword(false);
    setRawNumber('');
    setBio('');
    setQuantity(1);
    setRangeScore(5);
    setDay('15');
    setMonth('06');
    setYear('2000');
    setHour('09');
    setMinute('30');
    setTimePeriod('AM');
    setRating(4);
    setSelectedColor(colorPalette[1]);
    setCountry('United States');
    setShowDropdown(false);
    setGender('Male');
    setSkills(['React Native']);
    setNotifications(true);
    setUploadedFile(null);
    setAgreeTerms(false);
  };

  // Submit Handler
  const handleSubmit = () => {
    if (!agreeTerms) {
      Alert.alert('Required', 'Please accept the Terms & Conditions before submitting.');
      return;
    }

    Alert.alert(
      'Form Submission Successful',
      JSON.stringify(
        {
          fullName,
          searchQuery,
          email,
          phone,
          websiteUrl,
          password: password ? '••••••••' : '',
          rawNumber,
          quantity,
          rangeScore: `${rangeScore}/10`,
          appointmentDate: `${year}-${month}-${day}`,
          appointmentTime: `${hour}:${minute} ${timePeriod}`,
          rating: `${rating} Stars`,
          selectedColor,
          country,
          gender,
          skills,
          notifications,
          uploadedFile: uploadedFile || 'No file attached',
          bio,
        },
        null,
        2
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.header}>All Form Elements</Text>

        {/* 1. Full Name */}
        <Text style={styles.label}>1. Full Name (Text Input):</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. John Doe"
          value={fullName}
          onChangeText={setFullName}
        />

        {/* 2. Search Field with Clear Button */}
        <Text style={styles.label}>2. Search (with Clear Button):</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search keywords..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')} style={styles.clearBtn}>
              <Text style={styles.clearBtnText}>✕</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* 3. Email Input */}
        <Text style={styles.label}>3. Email Address:</Text>
        <TextInput
          style={styles.input}
          placeholder="john@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        {/* 4. Phone Number Input */}
        <Text style={styles.label}>4. Phone Number (Tel):</Text>
        <TextInput
          style={styles.input}
          placeholder="0712345678"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        {/* 5. URL Input */}
        <Text style={styles.label}>5. Website (URL):</Text>
        <TextInput
          style={styles.input}
          placeholder="https://mywebsite.com"
          keyboardType="url"
          autoCapitalize="none"
          value={websiteUrl}
          onChangeText={setWebsiteUrl}
        />

        {/* 6. Password with Show/Hide Toggle */}
        <Text style={styles.label}>6. Password (with Toggle):</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.toggleBtn}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={styles.toggleBtnText}>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>

        {/* 7. Number Input */}
        <Text style={styles.label}>7. Age / Raw Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter numeric value"
          keyboardType="numeric"
          value={rawNumber}
          onChangeText={setRawNumber}
        />

        {/* 8. Stepper / Counter */}
        <Text style={styles.label}>8. Quantity (Stepper - / +):</Text>
        <View style={styles.stepperRow}>
          <TouchableOpacity
            style={styles.stepperBtn}
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Text style={styles.stepperBtnText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.stepperValue}>{quantity}</Text>
          <TouchableOpacity
            style={styles.stepperBtn}
            onPress={() => setQuantity(quantity + 1)}
          >
            <Text style={styles.stepperBtnText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* 9. Slider / Range (1 to 10) */}
        <Text style={styles.label}>9. Range / Score: {rangeScore} / 10</Text>
        <View style={styles.rangeRow}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
            <TouchableOpacity
              key={score}
              style={[
                styles.rangePill,
                rangeScore === score && styles.rangePillActive,
              ]}
              onPress={() => setRangeScore(score)}
            >
              <Text
                style={[
                  styles.rangePillText,
                  rangeScore === score && styles.rangePillTextActive,
                ]}
              >
                {score}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 10. Date of Birth Picker */}
        <Text style={styles.label}>10. Date Picker (Day / Month / Year):</Text>
        <View style={styles.inlineRow}>
          <TextInput
            style={[styles.input, styles.shortInput]}
            placeholder="DD"
            keyboardType="numeric"
            maxLength={2}
            value={day}
            onChangeText={setDay}
          />
          <Text style={styles.separator}>/</Text>
          <TextInput
            style={[styles.input, styles.shortInput]}
            placeholder="MM"
            keyboardType="numeric"
            maxLength={2}
            value={month}
            onChangeText={setMonth}
          />
          <Text style={styles.separator}>/</Text>
          <TextInput
            style={[styles.input, styles.yearInput]}
            placeholder="YYYY"
            keyboardType="numeric"
            maxLength={4}
            value={year}
            onChangeText={setYear}
          />
        </View>

        {/* 11. Time Picker */}
        <Text style={styles.label}>11. Time Picker (HH : MM AM/PM):</Text>
        <View style={styles.inlineRow}>
          <TextInput
            style={[styles.input, styles.shortInput]}
            placeholder="HH"
            keyboardType="numeric"
            maxLength={2}
            value={hour}
            onChangeText={setHour}
          />
          <Text style={styles.separator}>:</Text>
          <TextInput
            style={[styles.input, styles.shortInput]}
            placeholder="MM"
            keyboardType="numeric"
            maxLength={2}
            value={minute}
            onChangeText={setMinute}
          />
          <View style={styles.amPmContainer}>
            <TouchableOpacity
              style={[styles.amPmBtn, timePeriod === 'AM' && styles.amPmBtnActive]}
              onPress={() => setTimePeriod('AM')}
            >
              <Text style={[styles.amPmText, timePeriod === 'AM' && styles.amPmTextActive]}>
                AM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.amPmBtn, timePeriod === 'PM' && styles.amPmBtnActive]}
              onPress={() => setTimePeriod('PM')}
            >
              <Text style={[styles.amPmText, timePeriod === 'PM' && styles.amPmTextActive]}>
                PM
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 12. Star Rating (1 to 5) */}
        <Text style={styles.label}>12. Star Rating:</Text>
        <View style={styles.starRow}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
              <Text style={[styles.star, rating >= star && styles.starActive]}>
                ★
              </Text>
            </TouchableOpacity>
          ))}
          <Text style={styles.starText}>({rating} of 5 stars)</Text>
        </View>

        {/* 13. Color Picker Swatches */}
        <Text style={styles.label}>13. Color Picker (Select Theme):</Text>
        <View style={styles.colorRow}>
          {colorPalette.map((c) => (
            <TouchableOpacity
              key={c}
              style={[
                styles.colorSwatch,
                { backgroundColor: c },
                selectedColor === c && styles.colorSwatchSelected,
              ]}
              onPress={() => setSelectedColor(c)}
            />
          ))}
        </View>

        {/* 14. Dropdown / Select Picker */}
        <Text style={styles.label}>14. Country (Dropdown Select):</Text>
        <TouchableOpacity
          style={styles.dropdownBox}
          onPress={() => setShowDropdown(!showDropdown)}
        >
          <Text style={styles.dropdownText}>{country}</Text>
          <Text style={styles.dropdownArrow}>{showDropdown ? '▲' : '▼'}</Text>
        </TouchableOpacity>
        {showDropdown && (
          <View style={styles.dropdownMenu}>
            {countryList.map((c) => (
              <TouchableOpacity
                key={c}
                style={styles.dropdownOption}
                onPress={() => {
                  setCountry(c);
                  setShowDropdown(false);
                }}
              >
                <Text style={c === country ? styles.dropdownSelectedText : null}>
                  {c}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* 15. Radio Buttons */}
        <Text style={styles.label}>15. Gender (Radio Buttons):</Text>
        <View style={styles.radioGroup}>
          {genderOptions.map((opt) => (
            <TouchableOpacity
              key={opt}
              style={styles.radioItem}
              onPress={() => setGender(opt)}
            >
              <View style={styles.radioCircle}>
                {gender === opt && <View style={styles.radioDot} />}
              </View>
              <Text style={styles.optionLabel}>{opt}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 16. Multi-select Checkboxes */}
        <Text style={styles.label}>16. Skills (Checkboxes):</Text>
        <View style={styles.checkboxGroup}>
          {availableSkills.map((skill) => {
            const isChecked = skills.includes(skill);
            return (
              <TouchableOpacity
                key={skill}
                style={styles.checkboxItem}
                onPress={() => toggleSkill(skill)}
              >
                <View style={styles.checkboxBox}>
                  {isChecked && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.optionLabel}>{skill}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* 17. Switch Toggle */}
        <View style={styles.switchRow}>
          <Text style={styles.label}>17. Push Notifications (Switch):</Text>
          <Switch value={notifications} onValueChange={setNotifications} />
        </View>

        {/* 18. File / Document Upload */}
        <Text style={styles.label}>18. File Attachment (Upload):</Text>
        <View style={styles.fileBox}>
          <Text style={styles.fileText}>
            {uploadedFile ? `📎 ${uploadedFile}` : 'No file chosen'}
          </Text>
          <View style={styles.fileActions}>
            <TouchableOpacity
              style={styles.fileBtn}
              onPress={() => setUploadedFile('resume_document.pdf')}
            >
              <Text style={styles.fileBtnText}>Choose File</Text>
            </TouchableOpacity>
            {uploadedFile && (
              <TouchableOpacity
                style={[styles.fileBtn, styles.removeBtn]}
                onPress={() => setUploadedFile(null)}
              >
                <Text style={styles.removeBtnText}>Remove</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* 19. Multiline Text Area */}
        <Text style={styles.label}>19. Bio / Notes (Multiline Text Area):</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Tell us about yourself..."
          multiline
          numberOfLines={4}
          value={bio}
          onChangeText={setBio}
        />

        {/* 20. Single Agreement Checkbox */}
        <TouchableOpacity
          style={styles.checkboxItem}
          onPress={() => setAgreeTerms(!agreeTerms)}
        >
          <View style={styles.checkboxBox}>
            {agreeTerms && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.optionLabel}>
            20. I agree to the terms and privacy conditions
          </Text>
        </TouchableOpacity>

        {/* 21. Action Buttons (Reset & Submit) */}
        <View style={styles.buttonRow}>
          <View style={styles.btnWrapper}>
            <Button title="Reset Form" color="#666" onPress={handleReset} />
          </View>
          <View style={styles.btnWrapper}>
            <Button title="Submit Form" onPress={handleSubmit} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    padding: 16,
    paddingBottom: 50,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#111',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 14,
    marginBottom: 4,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    fontSize: 14,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    alignItems: 'center',
    paddingRight: 8,
  },
  searchInput: {
    flex: 1,
    padding: 8,
    fontSize: 14,
  },
  clearBtn: {
    padding: 4,
  },
  clearBtnText: {
    color: '#888',
    fontWeight: 'bold',
    fontSize: 14,
  },
  passwordContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    padding: 8,
    fontSize: 14,
  },
  toggleBtn: {
    paddingHorizontal: 12,
  },
  toggleBtnText: {
    color: '#007AFF',
    fontSize: 13,
    fontWeight: '600',
  },
  stepperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  stepperBtn: {
    width: 38,
    height: 38,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  stepperBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stepperValue: {
    fontSize: 16,
    fontWeight: 'bold',
    minWidth: 30,
    textAlign: 'center',
  },
  rangeRow: {
    flexDirection: 'row',
    gap: 4,
  },
  rangePill: {
    flex: 1,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    alignItems: 'center',
  },
  rangePillActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  rangePillText: {
    fontSize: 12,
    color: '#333',
  },
  rangePillTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shortInput: {
    width: 55,
    textAlign: 'center',
  },
  yearInput: {
    width: 75,
    textAlign: 'center',
  },
  separator: {
    paddingHorizontal: 6,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  amPmContainer: {
    flexDirection: 'row',
    marginLeft: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    overflow: 'hidden',
  },
  amPmBtn: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: '#f9f9f9',
  },
  amPmBtnActive: {
    backgroundColor: '#007AFF',
  },
  amPmText: {
    fontSize: 12,
    color: '#333',
  },
  amPmTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  starRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  star: {
    fontSize: 28,
    color: '#ccc',
  },
  starActive: {
    color: '#f59e0b',
  },
  starText: {
    fontSize: 13,
    color: '#666',
    marginLeft: 6,
  },
  colorRow: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: 4,
  },
  colorSwatch: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  colorSwatchSelected: {
    borderWidth: 3,
    borderColor: '#000',
  },
  dropdownBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  dropdownText: {
    fontSize: 14,
  },
  dropdownArrow: {
    fontSize: 12,
    color: '#666',
  },
  dropdownMenu: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderTopWidth: 0,
    borderRadius: 4,
  },
  dropdownOption: {
    padding: 9,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#eee',
  },
  dropdownSelectedText: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  radioGroup: {
    gap: 8,
    marginVertical: 4,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
  },
  checkboxGroup: {
    gap: 8,
    marginVertical: 4,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  checkboxBox: {
    width: 18,
    height: 18,
    borderWidth: 1.5,
    borderColor: '#333',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  checkmark: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  optionLabel: {
    fontSize: 14,
    color: '#333',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  fileBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fafafa',
  },
  fileText: {
    fontSize: 13,
    color: '#444',
    flex: 1,
  },
  fileActions: {
    flexDirection: 'row',
    gap: 6,
  },
  fileBtn: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  fileBtnText: {
    fontSize: 12,
    fontWeight: '600',
  },
  removeBtn: {
    borderColor: '#fca5a5',
    backgroundColor: '#fef2f2',
  },
  removeBtnText: {
    color: '#dc2626',
    fontSize: 12,
    fontWeight: '600',
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
    marginBottom: 30,
  },
  btnWrapper: {
    flex: 1,
  },
});
