# PROJECT SAFEGUARDS & COMPONENT PROTECTION

## 🔒 PROTECTED SYSTEMS - DO NOT MODIFY UNLESS EXPLICITLY REQUESTED

### Core Architecture
- `components/ui/masterpiece-background-system.tsx` - **PROTECTED**
- `app/page.tsx` - Layout and section structure - **PROTECTED**
- `components/cinematic-navigation.tsx` - **PROTECTED**
- `components/footer.tsx` - **PROTECTED** (unless footer changes requested)

### Background System (CRITICAL PROTECTION)
- **HeroBackground** - Luxury geometric pattern - **NEVER REPLACE**
- **AboutBackground** - Muted geometric for portrait focus - **NEVER REPLACE**
- **ProjectsBackground** - Clean gradient for gallery - **NEVER REPLACE**
- **ExperienceBackground** - Animated gradient with NO white boxes - **NEVER REPLACE**
- **ServicesBackground** - Texture background - **NEVER REPLACE**
- **FooterBackground** - **NEVER REPLACE**

### Design System Integrity
- `lib/design-constants.ts` - **PROTECTED**
- `lib/design-system.ts` - **PROTECTED**
- `lib/content-config.ts` - **PROTECTED**
- Typography system - **PROTECTED**
- Color system - **PROTECTED**

## 🎯 TARGETED MODIFICATION GUIDELINES

### When User Requests Hero Animation Changes:
✅ **DO:** Enhance `components/cinematic-hero.tsx` with overlays
❌ **DON'T:** Modify background system or replace existing backgrounds

### When User Requests Navigation Changes:
✅ **DO:** Enhance `components/cinematic-navigation.tsx`
❌ **DON'T:** Replace entire navigation system

### When User Requests Footer Changes:
✅ **DO:** Modify `components/footer.tsx` specifically
❌ **DON'T:** Touch background system or layout

### When User Requests Project Section Changes:
✅ **DO:** Modify `components/masterpiece-projects-showcase.tsx`
❌ **DON'T:** Change `ProjectsBackground` gradient system

## 📝 PRE-CHANGE VERIFICATION

Before making ANY modification, ask:
1. **What EXACTLY did the user request?**
2. **Which specific file/component needs changes?**
3. **What systems must remain untouched?**
4. **Am I enhancing or replacing?** (Always enhance!)

## 🚨 EMERGENCY PROTOCOLS

If you accidentally modify protected systems:
1. **IMMEDIATELY acknowledge the mistake**
2. **Restore the original functionality**
3. **Make only the requested changes**
4. **Deploy the fix promptly**

## 💰 COST AWARENESS

Every mistake costs the user:
- ⏰ **Time** - Having to identify and report issues
- 💬 **Prompts** - Additional messages to fix problems
- 😤 **Frustration** - Disrupted workflow and trust

**ZERO TOLERANCE for scope creep or accidental modifications.**

---

**GOLDEN RULE: If it's not explicitly mentioned in the request, DON'T TOUCH IT.**
